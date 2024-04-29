import { Component } from '@angular/core';
import { DataModel } from "../models/data-model";
import { ContactService } from "../services/contact.service";
import { NgForOf } from "@angular/common";
import { ContactComponent } from "./contact/contact.component";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { FilterPipe } from "../pipes/filter.pipe";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { MatDialog } from "@angular/material/dialog";
import { ContactInfoDialogComponent } from "../dialogs/contact-info-dialog/contact-info-dialog.component";

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    NgForOf,
    ContactComponent,
    MatIcon,
    MatButton,
    FilterPipe,
    FormsModule,
    MatInput
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  contactList: DataModel;
  searchText: string = '';
  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) {
    this.contactList = this.contactService.getContacts('data');
  }

  createContact(): void {
    const dialogRef = this.dialog.open(ContactInfoDialogComponent, {
      width: '450px',
      height: '470px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
