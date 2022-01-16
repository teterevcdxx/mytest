import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';


import { Observable } from 'rxjs';
import { FadeIn } from 'src/app/shared/animations';
import { IUniversity } from 'src/app/shared/models/univercity.model';
import { AppActions } from 'src/app/store/app.actions';
import { AppSelectors } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  animations: [FadeIn]
})
export class BookmarksComponent implements OnInit { 
  public savedUniversities$: Observable<IUniversity[]>
  @ViewChild('bookmarks') bookmarks: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(private store: Store) { 
    this.savedUniversities$ = this.store.select(AppSelectors.savedUnivercities);
  }
  ngOnInit(): void {
    
  }
  public removeBookmark(element: IUniversity){
    console.log(element)
    this.store.dispatch(AppActions.removeUniversity(element))
  }

}
