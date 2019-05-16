import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientenosocioComponent } from './clientenosocio.component';

describe('ClientenosocioComponent', () => {
  let component: ClientenosocioComponent;
  let fixture: ComponentFixture<ClientenosocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientenosocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientenosocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
