import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from 'src/app/components/persona/address-list/address-list.component';


@NgModule({
  declarations: [
    AddressListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressListComponent
  ]
})
export class AddressModule { }
