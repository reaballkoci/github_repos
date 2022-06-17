import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '.';
import userService from '../services/userService';
import userSlice from './userSlice';

export const userAction = userSlice.actions;

export const fetchUsers = (
  searchText: string,
  page: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: AppDispatch) => {
    const response = await userService.getUsers(searchText, page);
    dispatch(userAction.setUsers(response));
  };
};
