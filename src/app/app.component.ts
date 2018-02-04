import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './Services/app.service';
import { HomePageComponent } from './home/app-homepage.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private _appService: AppService) { }
    ngOnInit(): void {
    }
}
