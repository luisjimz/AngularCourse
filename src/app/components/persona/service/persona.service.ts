import { Injectable } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Persona } from '../../shared/entities/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaList: Persona[] = [{
    age: 24,
    email: "luisjimz@gmail.com",
    id: 1,
    lastName: "Jimenez",
    name: "Luis",
    birthDate: new Date(),
    creationDate: new Date()
  },
  {
    age: 70,
    email: "octaviopaz@yahoo.com",
    id: 2,
    lastName: "Paz",
    name: "Octavio",
    birthDate: new Date(),
    creationDate: new Date()
  }];

  extraHeader: string[] = [
    "address"
  ]

  savePerson(persona: FormGroup) {
    var temp = new Persona();
    temp.id = this.setId();
    temp.name = persona.value.name;
    temp.lastName = persona.value.lastName;
    temp.email = persona.value.email;
    temp.age = this.calculateAge(persona.value.birthDate);
    temp.birthDate = persona.value.birthDate;
    temp.creationDate = new Date();
    this.personaList.push(temp);
    console.log(this.personaList);
  }

  getPersons(): Persona[] {
    return this.personaList;
  }

  findPerson(id): Persona{
    for(var i = 0; i < this.personaList.length; i++){
      if(this.personaList[i].id == id){
        return this.personaList[i];
      }
    }
  }

  calculateAge(date: Date): number {
    return new Date().getFullYear() - date.getFullYear();
  }



  getTableHeader(): string[] {
    let foo = new Persona();
    let headers = Object.getOwnPropertyNames(foo);
    headers.push(this.extraHeader[0]);
    return headers;
  }

  setId(): number {
    if (this.personaList.length == 0) {
      return 1;
    } else {
      return this.personaList[this.personaList.length - 1].id + 1;
    }
  }

  constructor() { }
}
