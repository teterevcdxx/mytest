import { NgModule } from '@angular/core';
import { BookmarksComponent } from './bookmarks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { ExportComponent } from '../../shared/export/export.component';


const routes: Routes = [
    {
      path: '',
      component: BookmarksComponent
    }
  ];

@NgModule({
  declarations: [
      BookmarksComponent,
    
  ],
  imports: [
    

    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],

})
export class BookmarksModule { }
