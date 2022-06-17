import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepositoriesState, Repository } from '../models/RepositoriesModel';

const initialRepositoriesState: RepositoriesState = {
  repositories: [],
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: initialRepositoriesState,
  reducers: {
    setRepositories(state, action: PayloadAction<Repository[]>) {
      state.repositories = action.payload;
    },
  },
});

export default repositoriesSlice;
