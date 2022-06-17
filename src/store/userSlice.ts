import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse, UserState } from '../models/UserModel';

const initialUserState: UserState = {
  users: [],
  totalCount: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUsers(state, action: PayloadAction<UserResponse>) {
      console.log({ state, action });
      state.users = action.payload.items;
      state.totalCount = action.payload.total_count;
    },
  },
});

export default userSlice;
