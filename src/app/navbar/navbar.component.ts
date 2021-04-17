import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() siteSettings: any;

  constructor() { }

  ngOnInit(): void {
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav(afterTime: number= 0): void {
    setTimeout(
      () => {
        $('.navbar').css('width' , '0');
        $('.one-page').css('margin-left' , '0');
        $('.infos-contact').css('padding-right', '0');
      }, afterTime);
  }
}
