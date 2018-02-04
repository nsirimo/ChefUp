import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/app-homepage.component';

const ROUTES: Route[] = [
  { path: '', component: HomePageComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }