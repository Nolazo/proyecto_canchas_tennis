import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreservaComponent } from './gestionreserva.component';

describe('GestionreservaComponent', () => {
  let component: GestionreservaComponent;
  let fixture: ComponentFixture<GestionreservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionreservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
