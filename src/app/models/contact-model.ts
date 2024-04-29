export interface ContactModel {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  birth_date: Date | null;
  email: string | null;
  address: string | null;
}
