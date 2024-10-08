import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'new-contact', component: ContactFormComponent },
  { path: 'contact/:id', component: ContactViewComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }