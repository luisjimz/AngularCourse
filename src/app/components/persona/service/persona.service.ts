import { Injectable } from '@angular/core';
import { Persona } from '../entities/persona';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaList: Persona[] = [{
    age: 24,
    email: "luisjimz@gmail.com",
    id: 1,
    lastName: "Jimenez",
    name: "Luis"
  },
  {
    age: 70,
    email: "octaviopaz@yahoo.com",
    id: 2,
    lastName: "Paz",
    name: "Octavio"
  }];

  savePerson(persona: FormGroup) {
    var temp = new Persona();
    temp.id = this.setId();
    temp.name = persona.value.name;
    temp.lastName = persona.value.lastName;
    temp.email = persona.value.email;
    temp.age = persona.value.age;
    this.personaList.push(temp);
    console.log(this.personaList);
  }

  getPersons(): Persona[] {
    return this.personaList;
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
