import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './Services/app.service';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/app-homepage.component';
import { RecipeServices } from './Services/recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const ROUTES: Route[] = [
  { path: '', component: HomePageComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AppService, RecipeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
