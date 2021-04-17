import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrainingComponent } from './section-training.component';

describe('SectionTrainingComponent', () => {
  let component: SectionTrainingComponent;
  let fixture: ComponentFixture<SectionTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
