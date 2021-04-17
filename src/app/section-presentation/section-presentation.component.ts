import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-presentation',
  templateUrl: './section-presentation.component.html',
  styleUrls: ['./section-presentation.component.scss']
})
export class SectionPresentationComponent implements OnInit {
  @Input() name!: string;
  @Input() jobTitle!: string;
  @Input() location!: string;
  @Input() mail!: string;
  @Input() phone!: string;
  @Input() github!: string;
  @Input() gitlab!: string;
  @Input() linkedin!: string;
  @Input() srcImg!: string;
  @Input() siteSettings!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
