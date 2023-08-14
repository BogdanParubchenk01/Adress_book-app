import { NewUser } from "../types/NewUser";
import { User } from "../types/User";

export const creatNewUser = (userId: number, { firstname, lastname, phone, email }: NewUser): User => {
  return {
    id: userId,
    email,
    username: firstname + lastname + userId,
    password: lastname + userId,
    name: {
      firstname,
      lastname,
    },
    address: {
      city: 'SomeWhere',
      street: 'SomeWhere',
      number: userId + 1,
      zipcode: 'SomeWhere',
      geolocation: {
        lat: 'SomeWhere',
        long: 'SomeWhere',
      },
    },
    phone,
  };
};

