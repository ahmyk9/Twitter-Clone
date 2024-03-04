import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpModalOpen: false,
  loginUpModalOpen: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalOpen = true
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false
    },
    openLogInUpModal: (state) => {
      state.loginUpModalOpen = true
    },
    closeLogInUpModal: (state) => {
      state.loginUpModalOpen = false
    }
  }
});

export const { openSignUpModal, closeSignUpModal, openLogInUpModal, closeLogInUpModal } = modalSlice.actions

export default modalSlice.reducer