import { Injectable } from "@angular/core";
// import { MatDialog } from "@angular/material/dialog";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ISearchQwery } from "../models/search.model";
import { RestService } from "../../services/rest.service";

import { AppActions } from "./app.actions";
import { of } from "rxjs";
import { NotificationService } from "../../services/notification.service";
import * as _ from 'lodash'
import { LocalStorageService } from "../../services/local-storage.service";
import { MatDialog } from "@angular/material/dialog";
import { ExportComponent } from "../export/export.component";

@Injectable()
export class LoadDataEffect {

    loadArticles$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AppActions.loadUniversities),
                mergeMap((action: ISearchQwery) => {
                    return this.restService.getUniversities(action).pipe(
                        map((university: any[]) => {
                            university = _.uniqBy(university, (el) => {
                                return el.name
                            })
                            university = university.map(el => {
                                el.saved = false
                                return el
                            }
                            )
                            return AppActions.loadUniversitiesSucces({ universities: university })
                        }
                        ),

                        catchError((error) => of(AppActions.loadUniversitiesError({ message: error })
                        ))
                    )
                })
            )
        }
    );

    saveUniversity$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AppActions.saveUniversity),
                tap((univercity) => {
                    this.notificationService.showMessage(`Added to bookmarks ${String.fromCodePoint(0x2B50)}`)
                    this.localStorageService.addToLocalStorage(univercity);
                })
            )
        }, { dispatch: false }
    )
    removeUniversity$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AppActions.removeUniversity),
                tap((univercity) => {
                    this.notificationService.showMessage(`Removed from bookmarks ${String.fromCodePoint(0x2B50)}`)
                    this.localStorageService.removeFromLocalStorage(univercity);
                })
            )
        }, { dispatch: false }
    )

    exportBookmarks$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AppActions.exportBookmarks),
                tap((univercity) => {
                 this.dialog.open(ExportComponent);  
                })
            )
        }, { dispatch: false }
    )
    constructor(
        private actions$: Actions,
        private restService: RestService,
        private notificationService: NotificationService,
        private localStorageService: LocalStorageService,
        private dialog: MatDialog
    ) { }

}