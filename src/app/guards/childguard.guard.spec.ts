import { TestBed, async, inject } from '@angular/core/testing';

import { ChildguardGuard } from './childguard.guard';

describe('ChildguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildguardGuard]
    });
  });

  it('should ...', inject([ChildguardGuard], (guard: ChildguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
