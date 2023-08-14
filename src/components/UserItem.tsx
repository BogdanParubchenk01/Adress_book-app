import React from "react";
import { User } from "../types/User";

import { NewUser } from "../types/NewUser";

interface Props {
  user: User,
  checkUser: (data: NewUser) => void,
  activeForm: (choise: boolean) => void,
  setId: (id: number) => void,
}

export const UserItem: React.FC<Props> = ({ user, checkUser, activeForm, setId }) => {

  const dataUser: NewUser = {
    firstname: user.name.firstname,
    lastname: user.name.lastname,
    phone: user.phone,
    email: user.email
  }

  const hanldeEddit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    checkUser(dataUser);
    setId(user.id);
    activeForm(true);
  }

  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-left">
          {user.id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">{user.name.firstname}</td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">{user.name.lastname}</td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">
          {user.phone}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-left">
          {user.email}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="px-5 py-2 rounded bg-yellow-500"
            onClick={hanldeEddit}
          >
            Edit
          </button>
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button className="p-2 text-white rounded bg-red-500">
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}

