import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userDetailsId } from 'src/app/store/selectors/auth.selector';
import { isMainHeader } from 'src/app/store/selectors/header.selector';

@Component({
  selector: 'app-header-for-home',
  templateUrl: './header-for-home.component.html',
  styleUrls: ['./header-for-home.component.css']
})
export class HeaderForHomeComponent implements OnInit {

  isMainHeader$ = this.store.select(isMainHeader);
  profileId: any = null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(userDetailsId).subscribe((p: any) => {
      console.log(p)
      this.profileId = p;
    });
  }

}
