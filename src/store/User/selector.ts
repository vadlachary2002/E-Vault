import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { UserStatus } from './reducer';

export const selectUser: (state: RootState) => UserStatus = createSelector(
  (state: RootState) => state.User,
  (state) => state
);
