import { Component } from '@angular/core';
import { ContactModel } from "../models/contact-model";
import { ContactService } from "../services/contact.service";
import { ActivatedRoute } from "@angular/router";
import { DatePipe, NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    MatButton,
    DatePipe
  ],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  contact: ContactModel | null;
  userId: string | null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    protected location: Location
  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.contact = this.userId ? this.contactService.getContactById(this.userId) : null;
  }
}
