export class Address {
    adressLine1: string;
    state: string;
    city: string;
    postalCode: number;
}
export class Customer {
    name: string;
    gender: string;
    password:string;
    contact:string;
    email:string;
    address: Address;

}