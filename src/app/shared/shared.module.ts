import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
    CommonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    HttpClientModule,
    ],
   
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,  
        HttpClientModule,
    ]
})
export class SharedModule { }