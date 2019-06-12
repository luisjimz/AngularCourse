import { Injectable } from '@angular/core';
import { Address } from '../entities/address';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList : Address[] = [{
    id: 1,
    street: "Avenida del Iman #580",
    city: "Mexico City",    
    state: "Mexico",
    zip: 50102
  }, 
  {
    id: 1,
    street: "Avenida Francisco Sosa #48",
    city: "Mexico City",    
    state: "Mexico",
    zip: 102933
  }];

  saveAddress(address : FormGroup){
    var temp = new Address();    
    temp.id = this.setId();
    temp.street = address.value.address.street;
    temp.city = address.value.address.city;
    temp.state = address.value.address.state;
    temp.zip = address.value.address.zip;
    this.addressList.push(temp);
    console.log(this.addressList)
  }

  getAddresses(): Address[]{
    return this.addressList;
  }

  getTableHeader() : string[]{
    let foo = new Address();
    let headers = Object.getOwnPropertyNames(foo);
    return headers;
  }

  getAdressesToString(): string[]{
    var addresses : string[] = [];
    for(var i = 0; i < this.addressList.length; i++ ){
      let temporal : Address;
      temporal = this.addressList[i];
      addresses.push(temporal.street + " " + temporal.city + ", " + temporal.state + " " + temporal.zip)
    }    
    return addresses;
  }

  setId() : number{    
    if(this.addressList.length == 0){
      return 1;
    }else{
      return this.addressList[this.addressList.length-1].id + 1; 
    }
  }
  constructor() { }
}
