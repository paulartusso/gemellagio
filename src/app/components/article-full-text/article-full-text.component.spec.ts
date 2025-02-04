import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFullTextComponent } from './article-full-text.component';

describe('ArticleFullTextComponent', () => {
  let component: ArticleFullTextComponent;
  let fixture: ComponentFixture<ArticleFullTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleFullTextComponent]
    });
    fixture = TestBed.createComponent(ArticleFullTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
