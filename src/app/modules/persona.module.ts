import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PersonaFormComponent } from 'src/app/components/persona/persona-form/persona-form.component';
import { PersonaListComponent } from 'src/app/components/persona/persona-list/persona-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PersonaFormComponent,
    PersonaListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BsDatepickerModule
    
  ],
  exports: [
    PersonaFormComponent,
    PersonaListComponent
  ]
})
export class PersonaModule { }
