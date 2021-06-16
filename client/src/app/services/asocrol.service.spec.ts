import { TestBed } from '@angular/core/testing';

import { AsocrolService } from './asocrol.service';

describe('AsocrolService', () => {
  let service: AsocrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsocrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
