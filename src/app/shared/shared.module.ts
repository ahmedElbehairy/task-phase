import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SnackBarComponent,
    NotFoundPageComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    NgbModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    NgSelectModule,
    NgbRatingModule,
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    SnackBarComponent,
    NotFoundPageComponent,
    CardComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
