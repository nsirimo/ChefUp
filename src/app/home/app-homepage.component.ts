import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'app-homepage.component.html',
  styleUrls: ['app-homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

}

