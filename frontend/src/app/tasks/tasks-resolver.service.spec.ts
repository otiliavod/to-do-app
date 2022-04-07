import { TestBed } from '@angular/core/testing';

import { TasksResolverService } from './tasks-resolver.service';

describe('TasksResolverService', () => {
  let service: TasksResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
