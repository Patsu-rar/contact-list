import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import { ContactModel } from "../models/contact-model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private ls: LocalStorageService) { }

  getContacts(key: string) {
    const contacts = this.ls.getItem(key);
    return contacts ? JSON.parse(contacts) : null;
  }

  getContactById(contactId: string) {
    return this.getContacts('data').contacts.filter(
      (contact: ContactModel) => contact.id === contactId
    )[0];
  }

  deleteContact(contactId: string) {
    const newContacts = this.getContacts('data').contacts.filter(
      (contact: ContactModel) => contact.id !== contactId
    );
    const response = {
      contacts: newContacts
    }
    this.ls.removeItem('data');
    this.ls.setItem('data', JSON.stringify(response));
  }

  createContanct(contact: ContactModel) {
    let newContacts = this.getContacts('data').contacts;
    newContacts.push(contact);
    const response = {
      contacts: newContacts
    }
    this.ls.removeItem('data');
    this.ls.setItem('data', JSON.stringify(response));
  }

  editContact(contactId: string, contact: ContactModel) {
    this.deleteContact(contactId);
    this.createContanct(contact);
  }
}
