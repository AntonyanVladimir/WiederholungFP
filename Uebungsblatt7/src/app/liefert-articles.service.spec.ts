import { TestBed } from '@angular/core/testing';

import { LiefertArticlesService } from './liefert-articles.service';

describe('LiefertArticlesService', () => {
  let service: LiefertArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiefertArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
