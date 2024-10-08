import { Component } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  };

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    this.contactService.addContact(this.contact);
    this.contact = { id: 0,firstName: '', lastName: '', street: '', city: '' }; // Reset form
  }
}