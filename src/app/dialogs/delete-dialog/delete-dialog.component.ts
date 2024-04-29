import { Component, Inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ContactModel } from "../../models/contact-model";
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactModel,
    private contactService: ContactService
  ) {
  }

  cancelEvent() {
    this.dialogRef.close();
  }

  confirmEvent() {
    if(this.data) {
      this.contactService.deleteContact(this.data.id);
      this.dialogRef.close();
    }
  }
}
