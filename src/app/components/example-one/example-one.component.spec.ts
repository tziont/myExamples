import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamleOneComponent } from './examle-one.component';

describe('ExamleOneComponent', () => {
  let component: ExamleOneComponent;
  let fixture: ComponentFixture<ExamleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
