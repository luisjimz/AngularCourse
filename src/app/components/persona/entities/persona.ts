import { IDatabaseObject } from 'src/app/components/shared/entitie/IDatabaseObject';

interface IPersona extends IDatabaseObject{
    name : string,
    lastName : string,
    age : number,
    email : string
}

export class Persona implements IPersona{
    id: number;
    name: string;    
    lastName: string;
    age: number;
    email: string;
    
}