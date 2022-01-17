import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FadeIn } from 'src/app/shared/animations';
import { IUniversity } from 'src/app/shared/models/univercity.model';
import { AppActions } from 'src/app/shared/store/app.actions';
import { AppSelectors } from 'src/app/shared/store/app.selectors';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  animations: [FadeIn]
})
export class BookmarksComponent implements OnInit { 

  public savedUniversities$: Observable<IUniversity[]>
  
  constructor(private store: Store, private dialog: MatDialog) { 
    this.savedUniversities$ = this.store.select(AppSelectors.savedUnivercities);
  }
  ngOnInit(): void {
    
  }
  public removeBookmark(element: IUniversity){
    this.store.dispatch(AppActions.removeUniversity(element))
  }


}
