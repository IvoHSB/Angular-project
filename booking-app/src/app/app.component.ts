import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booking-app';
  isHomePageHeader = true;

  constructor(private location: Location) {}

  ngOnInit(): void {

    if (this.location.path() === '') {
      this.isHomePageHeader = true;
    } else {
      this.isHomePageHeader = false;
    }
  }
}
