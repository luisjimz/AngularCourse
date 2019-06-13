import { IDatabaseObject } from 'src/app/components/shared/entities/IDatabaseObject';

interface IPersona extends IDatabaseObject{
    name : string,
    lastName : string,
    age : number,
    email : string,
    birthDate : Date,
    creationDate: Date
}

export class Persona implements IPersona{
    id: number;
    name: string = '';    
    lastName: string = '';
    age: number = 0;
    email: string = '';    
    birthDate: Date = new Date();
    creationDate: Date = new Date();
    
}