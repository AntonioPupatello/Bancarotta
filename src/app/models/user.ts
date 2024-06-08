export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // Consider using Date type if you plan to parse it
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}
 
export interface UserResponse {
  users: User[],
  total: number,
  skip: number,
  limit: number
}