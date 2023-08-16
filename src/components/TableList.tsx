import React, { useState } from 'react';
import { UserItem } from './UserItem';
import { User } from '../types/User';
import { NewUser } from '../types/NewUser';

interface Props {
  visibaleUsers: User[],
  checkUser: (data: NewUser) => void,
  activeForm: (choise: boolean) => void,
  setId: (id: number) => void,
  setDeleteId: (id: number) => void,
}

export const TableList: React.FC<Props> = ({ visibaleUsers, checkUser, activeForm, setId, setDeleteId }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentUsers = visibaleUsers.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className=" w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Phone No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-11 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentUsers.map(user => (
                  <UserItem key={user.id} user={user} checkUser={checkUser} activeForm={activeForm} setId={setId} setDeleteId={setDeleteId}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(visibaleUsers.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
