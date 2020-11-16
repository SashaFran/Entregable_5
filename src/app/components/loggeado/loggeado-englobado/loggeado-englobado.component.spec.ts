import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggeadoEnglobadoComponent } from './loggeado-englobado.component';

describe('LoggeadoEnglobadoComponent', () => {
  let component: LoggeadoEnglobadoComponent;
  let fixture: ComponentFixture<LoggeadoEnglobadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggeadoEnglobadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggeadoEnglobadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
