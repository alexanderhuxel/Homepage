import { TestBed } from '@angular/core/testing';

import { GlobalvaribalesService } from './globalvaribales.service';

describe('GlobalvaribalesService', () => {
  let service: GlobalvaribalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalvaribalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
