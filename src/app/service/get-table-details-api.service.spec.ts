import { TestBed } from '@angular/core/testing';

import { GetTableDetailsApiService } from './get-table-details-api.service';

describe('GetTableDetailsApiService', () => {
  let service: GetTableDetailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTableDetailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
