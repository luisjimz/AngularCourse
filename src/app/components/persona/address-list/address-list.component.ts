import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { Address } from '../entities/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  HEADER_TABLE: string[] = []
  
  addresses : Address[];

  constructor(private addresService : AddressService) { }

  ngOnInit() {
    this.addresses = this.addresService.getAddresses();
    if(this.addresses != undefined){
      this.HEADER_TABLE = this.addresService.getTableHeader();
    }
  }

}
