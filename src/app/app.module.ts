import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePageComponent } from './one-page/one-page.component';
import { SectionJobComponent } from './section-job/section-job.component';
import { SectionTrainingComponent } from './section-training/section-training.component';
import { SectionProjectComponent } from './section-project/section-project.component';
import { SectionPresentationComponent } from './section-presentation/section-presentation.component';
import { SectionSkillComponent } from './section-skill/section-skill.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './services/app.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { CvDisplayComponent } from './cv-display/cv-display.component';


const appRoutes: Routes = [
  {path: '404', component: PageNotFoundComponent},
  { path: 'cv/:name', component: CvDisplayComponent },
  {path: '**', redirectTo: '404'},  // Wildcard route for a 404 page
];


@NgModule({
  declarations: [
    AppComponent,
    OnePageComponent,
    SectionJobComponent,
    SectionTrainingComponent,
    SectionProjectComponent,
    SectionPresentationComponent,
    SectionSkillComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CvDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
