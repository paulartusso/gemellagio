import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppLanguage, TranslationService } from '../../services/translation.service';
import {
  CityDistance,
  TwinCitiesService,
  TwinCity,
} from '../../services/twin-cities.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  homeCity!: TwinCity;
  distances: CityDistance[] = [];
  mapImage = '';

  private sub?: Subscription;

  constructor(
    private readonly translation: TranslationService,
    private readonly twinCities: TwinCitiesService
  ) {}

  ngOnInit(): void {
    this.sub = this.translation.language$.subscribe((lang) => this.applyLanguage(lang));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private applyLanguage(lang: AppLanguage): void {
    this.homeCity = this.twinCities.getHomeCity(lang);
    this.distances = this.twinCities.getDistancesFromHome(lang);
    this.mapImage = this.homeCity.mapImage;
  }
}