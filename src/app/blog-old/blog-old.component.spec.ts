import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOldComponent } from './blog-old.component';

describe('BlogOldComponent', () => {
  let component: BlogOldComponent;
  let fixture: ComponentFixture<BlogOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
