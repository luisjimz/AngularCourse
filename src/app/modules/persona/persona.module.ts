import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from 'src/app/components/persona/persona.component';
import { PersonaFormComponent } from 'src/app/components/persona/persona-form/persona-form.component';
import { PersonaListComponent } from 'src/app/components/persona/persona-list/persona-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonaComponent,
    PersonaFormComponent,
    PersonaListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PersonaComponent,
    PersonaFormComponent,
    PersonaListComponent
  ]
})
export class PersonaModule { }
