import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from "./services/local-storage.service";
import { DataModel } from "./models/data-model";

const data: DataModel = {
  contacts: [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Wizz',
      phone_number: '0923416872',
      birth_date: null,
      email: null,
      address: null,
    },
    {
      id: '2',
      first_name: 'Jack',
      last_name: 'Sparrow',
      phone_number: '0923416872',
      birth_date: new Date('2003-03-12'),
      email: 'jacksparrow@gmail.com',
      address: 'Forgotten Isles',
    },
    {
      id: '3',
      first_name: 'Jack',
      last_name: 'Sparrow',
      phone_number: '0923416872',
      birth_date: new Date('2003-03-12'),
      email: 'jacksparrow@gmail.com',
      address: 'Forgotten Isles',
    },
    {
      id: '4',
      first_name: 'Jack',
      last_name: 'Sparrow',
      phone_number: '0923416872',
      birth_date: new Date('2003-03-12'),
      email: 'jacksparrow@gmail.com',
      address: 'Forgotten Isles',
    },
  ]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-list';

  constructor(private ls: LocalStorageService) {
    if (!this.ls.getItem('data')) {
      this.ls.setItem('data', JSON.stringify(data));
    }
  }
}
