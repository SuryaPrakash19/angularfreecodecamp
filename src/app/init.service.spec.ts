import { TestBed } from '@angular/core/testing';

import { InitService } from './init.service';
import { HttpClientModule } from '@angular/common/http';

describe('InitService', () => {
  let service: InitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(InitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
