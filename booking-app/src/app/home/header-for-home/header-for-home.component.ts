import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isMainHeader } from 'src/app/store/selectors/header.selector';

@Component({
  selector: 'app-header-for-home',
  templateUrl: './header-for-home.component.html',
  styleUrls: ['./header-for-home.component.css']
})
export class HeaderForHomeComponent {

  isMainHeader$ = this.store.select(isMainHeader);

  constructor(private store: Store) {}

}
