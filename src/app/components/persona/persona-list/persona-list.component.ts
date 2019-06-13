import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { Router } from '@angular/router';
import { Persona } from '../../shared/entities/persona';
import { AddressService } from '../../address/service/address.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {

  HEADER_TABLE: string[];
  PROPERTY: string[];
  personas : Persona[];
  addresses : string[]; 

  constructor(
    private personaService : PersonaService,
    private addressService : AddressService,
    private router : Router
    ) { }

  ngOnInit() {      
    this.HEADER_TABLE = this.personaService.getTableHeader();  
    this.personas = this.personaService.getPersons();    
    this.addresses = this.addressService.getAdressesToString();  
  }

  editPerson(foo:any) : void{
    console.log(foo);
    this.router.navigate(['/edit/'+foo]);
  }
}
