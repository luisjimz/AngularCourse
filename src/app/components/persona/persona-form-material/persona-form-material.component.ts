import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../../shared/entities/persona';
import { AddressService } from '../../address/service/address.service';
import { Router } from '@angular/router';
import { MatFormFieldControl } from '@angular/material';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-persona-form-material',
  templateUrl: './persona-form-material.component.html',
  styleUrls: ['./persona-form-material.component.scss']
})
export class PersonaFormMaterialComponent implements OnInit {

  personaForm : FormGroup;
  
  constructor(private fb: FormBuilder, private personaFormService: FormService) { }  

  ngOnInit(){   
    this.personaForm = this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],    
      email:['', Validators.required],
      birthDate: [Validators.required],      
      address:this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    }); 
  }

  onSubmit() : void{   

    this.personaFormService.saveForm(this.personaForm);
    this.personaForm.reset();
  }
}
