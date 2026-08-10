import { Injectable } from '@angular/core';
import { AppLanguage } from './translation.service';

export interface TwinCity {
  key: 'filottrano' | 'kuppenheim' | 'raon';
  name: string;
  country: string;
  population: number;
  mapImage: string;
}

export interface CityDistance {
  toCity: TwinCity;
  km: number;
}

// Straight facts: population figures and inter-city distances.
// Distances Filottrano<->Kuppenheim and Filottrano<->Raon-l'Étape as provided.
// Kuppenheim<->Raon-l'Étape (~165km) sourced from the Kuppenheim cycling
// club's account of that exact ride — verify against your own reference
// if precision matters for print/official use.
const CITIES: Record<TwinCity['key'], TwinCity> = {
  filottrano: {
    key: 'filottrano',
    name: 'Filottrano',
    country: 'Italia',
    population: 8849,
    mapImage: 'assets/img/map-it.svg', // Filottrano pin emphasized
  },
  kuppenheim: {
    key: 'kuppenheim',
    name: 'Kuppenheim',
    country: 'Deutschland',
    population: 8534,
    mapImage: 'assets/img/map-de.svg', // Kuppenheim pin emphasized
  },
  raon: {
    key: 'raon',
    name: "Raon-l'Étape",
    country: 'France',
    population: 5886,
    mapImage: 'assets/img/map-fr.svg', // Raon-l'Étape pin emphasized
  },
};

const DISTANCES_KM: Record<string, number> = {
  'filottrano-kuppenheim': 970,
  'filottrano-raon': 926,
  'kuppenheim-raon': 165,
};

const LANG_TO_HOME: Record<AppLanguage, TwinCity['key']> = {
  it: 'filottrano',
  de: 'kuppenheim',
  fr: 'raon',
};

@Injectable({ providedIn: 'root' })
export class TwinCitiesService {
  getHomeCity(lang: AppLanguage): TwinCity {
    return CITIES[LANG_TO_HOME[lang]];
  }

  getDistancesFromHome(lang: AppLanguage): CityDistance[] {
    const homeKey = LANG_TO_HOME[lang];
    return Object.keys(CITIES)
      .filter((key) => key !== homeKey)
      .map((key) => ({
        toCity: CITIES[key as TwinCity['key']],
        km: this.distanceBetween(homeKey, key as TwinCity['key']),
      }));
  }

  private distanceBetween(a: TwinCity['key'], b: TwinCity['key']): number {
    const direct = DISTANCES_KM[`${a}-${b}`];
    if (direct !== undefined) {
      return direct;
    }
    return DISTANCES_KM[`${b}-${a}`];
  }
}