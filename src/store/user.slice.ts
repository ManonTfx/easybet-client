import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';

export interface UserState {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface UserStateWithToken extends UserState {
  token: string;
}

interface UserStateWithLogged extends UserState {
  logged: boolean;
}

interface ReturnUseUserFromStore {
  user: UserStateWithLogged;
  dispatchLogin: (payload: UserStateWithToken) => {
    type: string;
    payload: UserStateWithToken;
  };
  dispatchLogout: () => {
    type: string;
  };
  dispatchSelf: (payload: UserState) => {
    type: string;
    payload: UserState;
  };
  dispatchUser: (payload: UserState) => {
    type: string;
    payload: UserState;
  };
}

const initialState: UserStateWithLogged = {
  logged: false,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserStateWithToken>) => {
      const { token, ...user } = action.payload;
      localStorage.setItem('token', token);
      return {
        ...user,
        logged: true,
      };
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
    self: (state, action: PayloadAction<UserState>) => ({
      ...action.payload,
      logged: true,
    }),
    update: (state, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { login, logout, self, update } = userSlice.actions;

export const useUserFromStore = (): ReturnUseUserFromStore => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const dispatchLogin = (payload: UserStateWithToken) =>
    dispatch(login(payload));
  const dispatchSelf = (payload: UserState) => dispatch(self(payload));
  const dispatchLogout = () => dispatch(logout());
  const dispatchUser = (payload: UserState) => dispatch(update(payload));
  return {
    user,
    dispatchLogin,
    dispatchLogout,
    dispatchSelf,
    dispatchUser,
  };
};

export default userSlice.reducer;
