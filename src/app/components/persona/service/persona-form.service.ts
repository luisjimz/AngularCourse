import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressService } from './address.service';
import { PersonaService } from './persona.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaFormService {

  

  saveForm(personaForm : FormGroup){    
    this.addressService.saveAddress(personaForm);
    this.personaService.savePerson(personaForm);      
  }

  constructor(
    private addressService : AddressService,
    private personaService : PersonaService
    ) { }
}
