import React, { useState } from "react";
import { addUser } from '../api/users'
import { NewUser } from "../types/NewUser";
import { User } from "../types/User";
import { creatNewUser } from "../utils/creatNewUser";

interface Props {
  isActive: boolean,
  formActive: (value: boolean) => void,
  newId?: number,
  usersChange?: (users: User[]) => void,
  users?: User[],
  initialFormData?: NewUser,
  id?: number,
  clickPatch?: (data: NewUser, id: number) => void,
}

function findError(key: string) {
  switch (key) {
    case 'firstname':
      return 'Please write First Name';

    case 'lastname':
      return 'Please write Last Name';

    case 'phone':
      return 'Please write Phone Number';

    case 'email':
      return 'Please write E-mail';

    default:
      return '';
  }
}

export const UserForm: React.FC<Props> = ({ isActive, formActive, newId, usersChange, initialFormData, id, users, clickPatch}) => {
  const [formData, setFormData] = useState<NewUser>({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    ...initialFormData,
  });

  const [errorMessage, setErrorMesage] = useState('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addNewUser = async () => {
    try {
      if (newId && users && usersChange) {
        addUser(newId + 1, formData);
        usersChange([...users, creatNewUser(newId + 1, formData)]);
      }
    } catch {
      throw new Error();
    }
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    for (const key in formData) {
      if (formData[key] === '') {
        setErrorMesage(findError(key));
        return;
      }
    }

    addNewUser();
    formActive(false);
  }

  const handlePatchSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (id && clickPatch) {
      for (const key in formData) {
        if (formData[key] === '') {
          setErrorMesage(findError(key));
          return;
        }
      }

      clickPatch(formData, id);
      formActive(false);
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      {isActive && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => formActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Enter your information</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
                onClick={initialFormData ? handlePatchSubmit : handleSubmit}
              >
                Submit
              </button>
            </form>
            {errorMessage && <label className="block text-sm font-medium text-red-500">{errorMessage}</label>}
          </div>
        </div>
      )}
    </div>
  )
}
