import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://aasdfasfaslocalhost:8800/api/users/1/update",
    user
  );
  return res.data;
});
export const deleteUser = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/1/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Sardor",
      email: "sardor@mail.ru",
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
  extraReducers: {
    [deleteUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [deleteUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
