import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: MainComponent
    }
  ];
@NgModule({
  declarations: [
      MainComponent
  ],
  imports: [
    MatAutocompleteModule,
    SharedModule,
    RouterModule.forChild(routes)
  ], 
  

})
export class MainModule { }
