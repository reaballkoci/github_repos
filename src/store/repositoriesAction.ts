import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '.';
import repositoriesService from '../services/repositoriesService';
import repositoriesSlice from './repositoriesSlice';

export const repositoriesAction = repositoriesSlice.actions;

export const fetchRepositories = (
  username: string,
  page: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: AppDispatch) => {
    const response = await repositoriesService.getRepositories(username, page);
    dispatch(repositoriesAction.setRepositories(response));
  };
};
