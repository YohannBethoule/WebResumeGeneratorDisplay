import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';
import {FileService} from '../services/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import $ from 'jquery';
import fileSaver from 'file-saver';

@Component({
  selector: 'app-cv-display',
  templateUrl: './cv-display.component.html',
  styleUrls: ['./cv-display.component.scss']
})
export class CvDisplayComponent implements OnInit, AfterViewInit {
  urlName!: string | null;
  jobs: any;
  trainings: any;
  projects: any;
  infos: any;
  skillset: any;
  siteSettings: any;
  siteTitle!: string;

  constructor(private appService: AppService, private fileService: FileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.urlName = this.route.snapshot.paramMap.get('name');
    this.appService.urlParameter = this.urlName;
    console.log(this.appService.urlParameter);
    this.appService.getData().subscribe(data => {
        console.log(data);
        this.jobs = data.jobs;
        this.trainings = data.trainings;
        this.projects = data.projects;
        this.infos = data.infos;
        this.skillset = data.skillsets;
        this.siteSettings = data.siteSettings;
        this.siteTitle = data.title;
      },
    error => {
      console.log(error);
      this.router.navigate(['404']).then(() => console.log('Error redirecting to 404'));
    });
  }

  ngAfterViewInit(): void{
    this.applySettings(this.siteSettings);
  }

  applySettings(settings: any): void{
    console.log(settings);
    document.title = this.siteTitle;
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav(): void {
    const w = '300px';
    $('.navbar').css('width' , w);
    $('.one-page').css('margin-left' , w);
    $('.infos-contact').css('padding-right', w);
  }

  print(quality = 1): void {
    if (this.infos.cv !== undefined){
      this.fileService.url = this.infos.cv;
      this.fileService.downloadFile().subscribe((response: any) => {
          const blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
          const url = window.URL.createObjectURL(blob);
          // window.open(url);
          // window.location.href = response.url;
          fileSaver.saveAs(blob, this.infos.name + '.pdf');
        }, () => console.log('Error downloading the file'),
        () => console.log('File downloaded successfully'));
    }else{
      /*$('body').css('cursor', 'wait');
      $('body').append('<div class=\'printable\'>' + $('body').html() + '</div>');

      $('.one-page').css('min-height', '18cm');
      const element = $('.printable')[0];
      console.log(element);

      const opt = {
        margin:       1,
        filename:     'YohannBethoule.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all', avoid: '.one-page' }
      };

      html2canvas(element).then(canvas => {
        const fileWidth = 208;
        const fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png');
        const PDF = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

        PDF.save('angular-demo.pdf');
      });*/
    }
  }

}
