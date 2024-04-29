import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatInput, MatInputModule, MatSuffix } from "@angular/material/input";
import {
  MatNativeDateModule,
  provideNativeDateAdapter
} from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgIf } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { ContactModel } from "../../models/contact-model";
import { ContactService } from "../../services/contact.service";
@Component({
  selector: 'app-contact-info-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerInput,
    MatInput,
    MatDatepickerToggle,
    MatSuffix,
    MatDatepicker,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButton,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './contact-info-dialog.component.html',
  styleUrl: './contact-info-dialog.component.scss'
})
export class ContactInfoDialogComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    birth_date: new FormControl(new Date()),
    email: new FormControl('',[Validators.email]),
    address: new FormControl(''),
  });

  startDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<ContactInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactModel,
    private contactService: ContactService
  ) {
    if (data) {
      this.profileForm.controls.firstName.setValue(data.first_name);
      this.profileForm.controls.lastName.setValue(data.last_name);
      this.profileForm.controls.phoneNumber.setValue(data.phone_number);
      this.profileForm.controls.birth_date.setValue(data.birth_date);
      this.profileForm.controls.email.setValue(data.email);
      this.profileForm.controls.address.setValue(data.address);
    }
  }

  cancelEvent() {
    this.dialogRef.close();
  }

  confirmEvent() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      let newContactInfo: ContactModel = {
        id: `${+this.contactService.getContacts('data')
          .contacts[this.contactService.getContacts('data').contacts.length -1].id + 1}`,
        first_name: formData.firstName ? formData.firstName : '',
        last_name: formData.lastName ? formData.lastName : '',
        phone_number: formData.phoneNumber ? formData.phoneNumber : '',
        birth_date: formData.birth_date ? formData.birth_date : new Date(),
        email: formData.email ? formData.email : '',
        address: formData.address ? formData.address : '',
      }
      if (this.data) {
        this.contactService.editContact(this.data.id, newContactInfo);
      } else {
        this.contactService.createContanct(newContactInfo);
      }
      this.dialogRef.close();
    }
  }
}
