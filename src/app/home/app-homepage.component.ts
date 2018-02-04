import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'app-homepage.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css',
    'app-homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  userInput = '';
  onEnter(userInput: string) { 
    this.userInput = userInput;
    console.log(userInput);
  }

  ngOnInit() {
  }

}

