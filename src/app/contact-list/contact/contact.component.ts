import { Component, Input } from '@angular/core';
import { ContactModel } from "../../models/contact-model";
import { Location, NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { ContactInfoDialogComponent } from "../../dialogs/contact-info-dialog/contact-info-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDialogComponent } from "../../dialogs/delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact: ContactModel | undefined;

  constructor(
    private dialog: MatDialog,
  ) { }

  editContact() {
    const dialogRef = this.dialog.open(ContactInfoDialogComponent, {
      width: '450px',
      height: '470px',
      data: this.contact
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }

  deleteContact() {
    if (this.contact) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '425px',
        height: '140px',
        data: this.contact
      });

      dialogRef.afterClosed().subscribe(result => {
        window.location.reload();
      });

    }
  }
}
