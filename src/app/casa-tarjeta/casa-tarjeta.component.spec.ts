import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaTarjetaComponent } from './casa-tarjeta.component';

describe('CasaTarjetaComponent', () => {
  let component: CasaTarjetaComponent;
  let fixture: ComponentFixture<CasaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
