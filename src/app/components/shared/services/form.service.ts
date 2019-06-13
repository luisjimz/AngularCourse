import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressService } from '../../address/service/address.service';
import { PersonaService } from '../../persona/service/persona.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  

  saveForm(personaForm : FormGroup){    
    this.addressService.saveAddress(personaForm);
    this.personaService.savePerson(personaForm);      
  }

  constructor(
    private addressService : AddressService,
    private personaService : PersonaService
    ) { }
}
