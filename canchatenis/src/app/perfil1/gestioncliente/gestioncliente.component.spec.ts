import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionclienteComponent } from './gestioncliente.component';

describe('GestionclienteComponent', () => {
  let component: GestionclienteComponent;
  let fixture: ComponentFixture<GestionclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
