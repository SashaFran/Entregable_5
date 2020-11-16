import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScrollHorizontalComponent } from './card-scroll-horizontal.component';

describe('CardScrollHorizontalComponent', () => {
  let component: CardScrollHorizontalComponent;
  let fixture: ComponentFixture<CardScrollHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardScrollHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardScrollHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
