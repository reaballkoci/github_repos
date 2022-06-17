import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { debounce } from 'lodash';
import UserCard from '../../components/UserCard';
import { fetchUsers } from '../../store/userAction';
import './styles.scss';
import { UserModel } from '../../models/UserModel';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';

export const ListUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const totalPages = Math.ceil(useAppSelector((state) => state.user.totalCount) / 30);
  const [currentPage, setCurrentPage] = useState(1);
  const [userInput, setUserInput] = useState('');

  const displayUsers = debounce((e) => {
    setUserInput(e.target.value);
  }, 700);

  useEffect(() => {
    dispatch(fetchUsers(userInput, currentPage));
  }, [currentPage, userInput, dispatch]);

  return (
    <>
      <Search onSearch={displayUsers} />
      <div className='users'>
        {users?.map((user: UserModel) => (
          <UserCard key={user?.login} user={user} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
