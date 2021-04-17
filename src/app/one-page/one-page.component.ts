import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {
  @Input() pageTitle!: string;
  @Input() pageTitleIcon!: string;

  @Input() pageIndex!: number;

  @Input() jobs: any;
  @Input() trainings: any;
  @Input() projects: any;
  @Input() infos: any;
  @Input() skillset: any;
  @Input() siteSettings: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
