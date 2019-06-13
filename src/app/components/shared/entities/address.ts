import { IDatabaseObject } from './IDatabaseObject';


interface IAddress extends IDatabaseObject{
    street : string,
    city : string,
    state : string,
    zip : number
}

export class Address implements IAddress{
    id: number;
    street: string = '';    
    city: string = '';
    state: string = '';
    zip: number = 0;
}