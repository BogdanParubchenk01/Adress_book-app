import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './types/User';
import { getAllUsers, patchUser } from './api/users';
import { TableList } from './components/TableList';
import { UsersFilter } from './components/UsersFiltert';
import { SortType } from './types/SortType';
import { UserForm } from './components/UserForm';
import { Loader } from './components/Loader';
import { NewUser } from './types/NewUser';

type DataSort = {
  query: string,
  sortType: SortType,
}

function userFilter(users: User[], { query, sortType }: DataSort) {
  let filterUsers: User[];

  switch (sortType) {
    case SortType.ALL:
      filterUsers = users.sort((a, b) => a.id - b.id);
      break;

    case SortType.ASD:
      filterUsers = users.sort((a, b) => a.name.firstname.localeCompare(b.name.firstname));
      break;

    case SortType.DESC:
      filterUsers = users.sort((a, b) => b.name.firstname.localeCompare(a.name.firstname));
      break;

    default:
      filterUsers = users
      break;
  }

  if (query) {
    return filterUsers = users.filter(user => (
      user.name.firstname.toLowerCase().includes(query.toLowerCase())
      || user.name.lastname.toLowerCase().includes(query.toLowerCase())
    ))
  }

  return filterUsers;
}


export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  const [sortType, setSortType] = useState<SortType>(SortType.ALL);
  const [formActive, setFormActive] = useState(false);
  const [newId, setNewId] = useState(-1);
  const [isLoad, setIsLoad] = useState(true);
  const [userPatch, setUserPatch] = useState<NewUser | null>(null)
  const [isActive, setIsActive] = useState(false);
  const [userId, setUserId] = useState(-1);

  useEffect(() => {
    const loadedUsers = async () => {
      try {
        const loadUsers = await getAllUsers();
        setNewId(loadUsers.length)

        setUsers(loadUsers);
        setIsLoad(false);
      } catch {
        throw new Error();
      }
    }

    loadedUsers();
  }, [])


  const handlePatchUser = async (data: NewUser, id: number) => {
    try {
      console.log(data);

      const newData = users.map(user =>
        user.id === id ? Object.assign({}, user, data) : user
      );

      await patchUser(id, data);

      setUsers(newData)
    } catch {
      throw new Error();
    }
  }

  useEffect(() => {
    setUsers(userFilter(users, { query, sortType }))
  }, [query, sortType, users])

  return (
    <>
      <div
        data-test={"phonebook-main"}
        className="
      bg-indigo-400 text-start pl-5 py-[100px] box-border h-[300px] rounded-xl text-5xl mb-4
      "
      >
        PhoneBook Application
      </div>

      {!isLoad
        ? <>
          <UsersFilter textChange={setQuery} sortChange={setSortType} formChange={setFormActive} />
          <TableList visibaleUsers={users} checkUser={setUserPatch} activeForm={setIsActive} setId={setUserId} />
          {formActive
            && <UserForm
              isActive={formActive}
              formActive={setFormActive}
              newId={newId}
              usersChange={setUsers}
              users={users}
            />
          }

          {userPatch
            && <UserForm
              isActive={isActive}
              formActive={setIsActive}
              clickPatch={handlePatchUser}
              initialFormData={userPatch}
              id={userId}
            />
          }
        </>
        : <Loader />
      }
    </>
  );
}

export default App;
