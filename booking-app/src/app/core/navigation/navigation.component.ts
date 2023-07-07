import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  activePage: String = "home";

  constructor(private location: Location) {}

  changeActivePage(page: String): void {
    this.activePage = page;
  }

  ngOnInit(): void {
    if (this.location.path() === '') {
      this.activePage = 'home';
    } else {
      this.activePage = this.location.path().split('/')[1];
    }

  }
}
