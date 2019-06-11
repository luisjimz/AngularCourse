import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PersonaFormService } from '../service/persona-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.scss']
})
export class PersonaFormParamComponent implements OnInit {

  personaForm : FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private personaFormService: PersonaFormService,
    private activatedRoute: ActivatedRoute
    ) {
      
     }  

  ngOnInit(){   
    // let id = this.activatedRoute.snapshot.params['id'];
    this.personaForm = this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      age:['', Validators.required],    
      email:['', Validators.required],
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
  }

  editPerson() : void{
    
  }

}
