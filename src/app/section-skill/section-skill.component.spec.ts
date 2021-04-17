import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkillComponent } from './section-skill.component';

describe('SectionSkillComponent', () => {
  let component: SectionSkillComponent;
  let fixture: ComponentFixture<SectionSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
