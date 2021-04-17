import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-training',
  templateUrl: './section-training.component.html',
  styleUrls: ['./section-training.component.scss']
})
export class SectionTrainingComponent implements OnInit {
  @Input() title!: string;
  @Input() place!: string;
  @Input() date!: string;
  @Input() siteSettings: any;

  @Input() subjects!: Array<any>;

  constructor() { }

  ngOnInit(): void {

  }


}
