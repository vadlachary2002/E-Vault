import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../models/User';

export type UserStatus = {
  status?: UserState;
};
const initialStatus: UserState = {
  email: '',
  isAdmin: false,
};
const retriviewStatus = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : initialStatus;
export const initialSearch: UserStatus = {
  status: retriviewStatus,
};
const searchSlice = createSlice({
  name: 'user',
  initialState: initialSearch,
  reducers: {
    updateUser: (state, action: PayloadAction<UserStatus>) => {
      state.status = action.payload.status;
      localStorage.setItem('user', JSON.stringify(action.payload.status));
    },
  },
});

const { reducer } = searchSlice;

export const { updateUser } = searchSlice.actions;

export default reducer;
