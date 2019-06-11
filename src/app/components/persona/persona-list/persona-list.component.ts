import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { AddressService } from '../service/address.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {


  

  constructor(
    private personaService : PersonaService,
    private addressService : AddressService,
    private router : Router
    ) { }

  ngOnInit() {    
    var personas = this.personaService.getPersons();
    var addresses = this.addressService.getAdressesToString();
  }

  editPerson(foo:any) : void{
    console.log(foo);
    this.router.navigate(['/edit/:'+foo]);
  }
}
