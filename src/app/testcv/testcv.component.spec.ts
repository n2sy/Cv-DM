import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcvComponent } from './testcv.component';

describe('TestcvComponent', () => {
  let component: TestcvComponent;
  let fixture: ComponentFixture<TestcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
