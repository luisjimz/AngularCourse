import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { Address } from '../entities/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  
  addresses : Address[] = this.addresService.getAddresses();

  constructor(private addresService : AddressService) { }

  ngOnInit() {
    
  }

}
