import { IDatabaseObject } from 'src/app/components/shared/entitie/IDatabaseObject';

interface IAddress extends IDatabaseObject{
    street : string,
    city : string,
    state : string,
    zip : number
}

export class Address implements IAddress{
    id: number;
    street: string;    
    city: string;
    state: string;
    zip: number;


}