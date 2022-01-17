import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSelectors } from './shared/store/app.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  savedCount$: Observable<number>
  constructor(private router: Router, private store: Store){
    this.savedCount$ = this.store.select(AppSelectors.count)
  }
  goToSaved(){
    this.router.navigateByUrl('saved')
  }
  goToHome(){
    this.router.navigateByUrl('')
  }
}
