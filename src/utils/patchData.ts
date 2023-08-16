import { NewUser } from "../types/NewUser";

export function patchData(data: NewUser) {
  return {
    name: {
      firstname: data.firstname,
      lastname: data.lastname,
    },
    phone: data.phone,
    email: data.email,
  }
}

