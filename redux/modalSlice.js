import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpModalOpen: false,
  loginUpModalOpen: false,
  commentModalOpen: false,

  commentTweetDetails: {
    id: null,
    tweet: null,
    photoURL: null,
    name: null,
    username: null,

  }

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
    },
    openCommentUpModal: (state) => {
      state.commentModalOpen = true
    },
    closeCommentUpModal: (state) => {
      state.commentModalOpen = false
    },

    setCommentTweet: (state, action) => {
      state.commentTweetDetails.username = action.payload.username,
        state.commentTweetDetails.name = action.payload.name,
        state.commentTweetDetails.id = action.payload.id,
        state.commentTweetDetails.photoURL = action.payload.photoURL
      state.commentTweetDetails.tweet = action.payload.tweet
    }
  }
});

export const { openSignUpModal, closeSignUpModal, openLogInUpModal, closeLogInUpModal, openCommentUpModal, closeCommentUpModal, setCommentTweet } = modalSlice.actions

export default modalSlice.reducer