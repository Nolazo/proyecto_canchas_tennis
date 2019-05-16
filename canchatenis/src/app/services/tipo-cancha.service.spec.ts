import { TestBed } from '@angular/core/testing';

import { TipoCanchaService } from './tipo-cancha.service';

describe('TipoCanchaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoCanchaService = TestBed.get(TipoCanchaService);
    expect(service).toBeTruthy();
  });
});
