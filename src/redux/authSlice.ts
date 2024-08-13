import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (credentials:any) => async (dispatch:any) => {
  try {
    // Giả lập API call
    const user = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'admin' && credentials.password === 'password') {
          resolve({ username: 'admin', token: 'fake-jwt-token' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export default authSlice.reducer;
