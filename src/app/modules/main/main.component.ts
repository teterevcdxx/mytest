import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';
import { ISearchQwery } from 'src/app/shared/models/search.model';
import { IUniversity } from 'src/app/shared/models/univercity.model';
import { AppActions } from 'src/app/store/app.actions';
import { AppSelectors } from 'src/app/store/app.selectors';
import { COUNTRIES } from 'src/assets/countries';
import { SubSink } from 'subsink'

import { FadeIn } from 'src/app/shared/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [FadeIn]
})
export class MainComponent implements OnInit {
  private subs = new SubSink();

  public searchForm = new FormGroup({
    searchedCountry: new FormControl(''),
    searchedUniversity: new FormControl('')
  })

  constructor(private store: Store, private router: Router) {
    this.universities$ = this.store.select(AppSelectors.univercities);
    this.currentSearched$ = this.store.select(AppSelectors.currentSearched);
  }
  filteredCountries$: Observable<string[]>
  universities$: Observable<IUniversity[]>;
  currentSearched$: Observable<ISearchQwery>;

  ngOnInit(): void {
    this.subs.add(
      this.searchForm.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        startWith('')
      ).subscribe((value: ISearchQwery) => {
        if (value.searchedCountry?.length) {
          this.store.dispatch(AppActions.loadUniversities({ searchedCountry: value.searchedCountry, searchedUniversity: value.searchedUniversity }));
        }
      }),
      this.currentSearched$.subscribe((search: ISearchQwery) => {
        this.searchForm.setValue(search);
      })
    )
    this.filteredCountries$ = this.searchForm.controls["searchedCountry"].valueChanges.pipe(
      debounceTime(300),
      startWith(''),
      map(value =>
        this._filter(value, COUNTRIES.map(m => m.name))
      )
    )

  }
  public saveBookmark(item: IUniversity) {
    this.store.dispatch(AppActions.saveUniversity(item))
  }
  public remove(item: IUniversity) {
    this.store.dispatch(AppActions.removeUniversity(item))
  }
  public goToSaved() {
    this.router.navigateByUrl('saved')
  }

  private _filter(value: string, data: string[]): string[] {
    return data?.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
