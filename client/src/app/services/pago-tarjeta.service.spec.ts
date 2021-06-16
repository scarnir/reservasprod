import { TestBed } from '@angular/core/testing';

import { PagoTarjetaService } from './pago-tarjeta.service';

describe('PagoTarjetaService', () => {
  let service: PagoTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
