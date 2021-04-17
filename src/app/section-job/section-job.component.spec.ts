import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionJobComponent } from './section-job.component';

describe('SectionJobComponent', () => {
  let component: SectionJobComponent;
  let fixture: ComponentFixture<SectionJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
