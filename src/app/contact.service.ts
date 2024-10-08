import { Injectable } from '@angular/core';

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
  }

@Injectable({
    providedIn: 'root'
})

export class ContactService{
    private contacts: Contact[] = [
        { id: 1,firstName: 'John', lastName: 'Doe', street: '123 Main St', city: 'Anytown' },
        { id: 2,firstName: 'Jane', lastName: 'Smith', street: '456 Oak St', city: 'Othertown' },
        { id: 3,firstName: 'Jim', lastName: 'Beam', street: '789 Pine St', city: 'Sometown' }
      ];

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContactById(id: number): Contact | undefined {
        return this.contacts.find(contact => contact.id === id);
      }
    
    updateContact(updatedContact: Contact): void {
        const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
        if (index !== -1) {
          this.contacts[index] = updatedContact;
        }
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }
}