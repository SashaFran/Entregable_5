import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLogginEnglobadoComponent } from './no-loggin-englobado.component';

describe('NoLogginEnglobadoComponent', () => {
  let component: NoLogginEnglobadoComponent;
  let fixture: ComponentFixture<NoLogginEnglobadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLogginEnglobadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLogginEnglobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
