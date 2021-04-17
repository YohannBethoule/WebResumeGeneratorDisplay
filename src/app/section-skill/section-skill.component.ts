import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-skill',
  templateUrl: './section-skill.component.html',
  styleUrls: ['./section-skill.component.scss']
})
export class SectionSkillComponent implements OnInit {
  @Input() domain!: string;
  @Input() skills!: Array<any>;
  @Input() siteSettings: any;

  constructor() { }

  ngOnInit(): void {
  }

}
