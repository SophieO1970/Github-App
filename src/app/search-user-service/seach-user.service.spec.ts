import { TestBed } from '@angular/core/testing';

import { SeachUserService } from './seach-user.service';

describe('SeachUserService', () => {
  let service: SeachUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeachUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
