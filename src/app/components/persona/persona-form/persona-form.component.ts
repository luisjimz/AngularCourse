import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { AddressService } from '../../address/service/address.service';




@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.scss']
})
export class PersonaFormComponent implements OnInit {

  personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaFormService: FormService,
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private addressService: AddressService
  ) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(Response => {
  //     console.log(Response);

  //     if (Response === undefined) {
  //       let id = Response["id"]
  //       console.log(id);
  //       var persona = this.personaService.findPerson(id);
  //       console.log(persona);
  //       var address = this.addressService.findAddress(id);
  //       console.log(address);
  //       this.personaForm = this.fb.group({
  //         name: persona.name,
  //         lastName: persona.lastName,
  //         email: persona.email,
  //         address: this.fb.group({
  //           street: address.street,
  //           city: address.city,
  //           state: address.state,
  //           zip: address.zip
  //         })
  //       });
  //     }
  //     else {
  //       this.personaForm = this.fb.group({
  //         name: ['', Validators.required],
  //         lastName: ['', Validators.required],
  //         email: ['', Validators.required],
  //         address: this.fb.group({
  //           street: ['', Validators.required],
  //           city: ['', Validators.required],
  //           state: ['', Validators.required],
  //           zip: ['', Validators.required]
  //         })
  //       });
  //     }
  //   })
  // }



  ngOnInit() {

    this.personaForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });

    this.activatedRoute.params.subscribe(Response => {
      
      let id = Response["id"]

      if (id != undefined) {        
        console.log(id);
        var persona = this.personaService.findPerson(id);
        console.log(persona);
        var address = this.addressService.findAddress(id);
        console.log(address);
        this.personaForm = this.fb.group({
          name: persona.name,
          lastName: persona.lastName,
          email: persona.email,
          address: this.fb.group({
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip
          })
        });
      }
    })
  }


  onSubmit(): void {
    this.personaFormService.saveForm(this.personaForm);
    this.personaForm.reset();
  }

  editPerson(): void {

  }

}
