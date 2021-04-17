import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-job',
  templateUrl: './section-job.component.html',
  styleUrls: ['./section-job.component.scss']
})
export class SectionJobComponent implements OnInit {
  @Input() title!: string;
  @Input() company!: string;
  @Input() periode!: string;
  @Input() city!: string;
  @Input() description!: string;
  @Input() siteSettings!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
