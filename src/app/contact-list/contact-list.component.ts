import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}


  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  viewContact(id: number): void {
    this.router.navigate(['/contact', id]);
  }
}
