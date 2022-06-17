import React from 'react';
import { User, UsersThree } from 'phosphor-react';
import './UserCard.scss';
import { useNavigate } from 'react-router-dom';
import { UserModel } from '../models/UserModel';

interface UserCardProps {
  user: UserModel;
}

const UserCard = ({ user: { login, avatar_url, type } }: UserCardProps) => {
  const history = useNavigate();

  return (
    <div className='card' onClick={() => history(`/user/${login}`)}>
      <img src={avatar_url} alt='avatar' />
      <div className='container'>
        {type == 'User' ? <User className='icon' /> : <UsersThree className='icon' />}
        <span className='login'>{login}</span>
      </div>
    </div>
  );
};

export default UserCard;
