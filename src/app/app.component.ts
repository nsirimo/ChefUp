import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppService } from './services/app.service';
import { HomePageComponent } from './home/app-homepage.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pageTitle: string = '';
  errorMessage: string = '';

  constructor(private _appService: AppService) { }
    ngOnInit(): void {
        this._appService.sayHello()
            .subscribe(result => {
                this.pageTitle = result;
            },
            error => {
                this.errorMessage = <any>error
            });
    }
}