import { Routes } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: ':id', component: ContactInfoComponent },
];
