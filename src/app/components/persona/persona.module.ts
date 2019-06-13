import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PersonaFormComponent } from 'src/app/components/persona/persona-form/persona-form.component';
import { PersonaListComponent } from 'src/app/components/persona/persona-list/persona-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaFormMaterialComponent } from './persona-form-material/persona-form-material.component';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    PersonaFormComponent,
    PersonaListComponent,
    PersonaFormMaterialComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule
    
  ],
  exports: [
    PersonaFormComponent,
    PersonaListComponent,
    PersonaFormMaterialComponent
  ]
})
export class PersonaModule { }
