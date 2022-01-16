import { NgModule } from '@angular/core';
import { BookmarksComponent } from './bookmarks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      component: BookmarksComponent
    }
  ];

@NgModule({
  declarations: [
      BookmarksComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],

})
export class BookmarksModule { }
