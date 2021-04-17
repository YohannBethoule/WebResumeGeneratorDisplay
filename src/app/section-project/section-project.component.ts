import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-project',
  templateUrl: './section-project.component.html',
  styleUrls: ['./section-project.component.scss']
})
export class SectionProjectComponent implements OnInit {

  @Input() title!: string;
  @Input() client!: string;
  @Input() summary!: string;
  @Input() mission!: string;

  @Input() techs!: any;
  @Input() siteSettings: any;

  constructor() { }

  ngOnInit(): void {
  }

}
