import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpModalOpen: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: ()=> {
      state.signUpModalOpen = true
    },
    closeSignUpModal: ()=> {
      state.signUpModalOpen = false
    }
  }
});

export const {openSignUpModal, closeSignUpModal} = modalSlice.actions

export default modalSlice.reducer