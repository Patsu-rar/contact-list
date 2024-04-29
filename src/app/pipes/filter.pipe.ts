import { Pipe, PipeTransform } from '@angular/core';
import { ContactModel } from "../models/contact-model";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: ContactModel[],searchText: string): any[] {
    if(!value) return [];
    if(!searchText) return value;
    searchText = searchText.toLowerCase();
    return value.filter( item => {
      return item.first_name.toLowerCase().includes(searchText)
        || item.last_name.toLowerCase().includes(searchText)
        || item.phone_number.includes(searchText);
    });
  }
}
