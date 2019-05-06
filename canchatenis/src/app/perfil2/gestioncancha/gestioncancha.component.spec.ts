import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncanchaComponent } from './gestioncancha.component';

describe('GestioncanchaComponent', () => {
  let component: GestioncanchaComponent;
  let fixture: ComponentFixture<GestioncanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
