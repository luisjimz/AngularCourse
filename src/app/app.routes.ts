import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';
import { PersonaListComponent } from './components/persona/persona-list/persona-list.component';
import { AddressListComponent } from './components/address/address-list/address-list.component';
import { PersonaFormMaterialComponent } from './components/persona/persona-form-material/persona-form-material.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: PersonaFormComponent },
    { path: 'inmemoryperson', component: PersonaListComponent },
    { path: 'inmemorypersonmaterial', component: PersonaFormMaterialComponent },
    { path: 'inmemoryaddress', component: AddressListComponent },
    { path: 'edit/:id', component: PersonaFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);