import { createSlice } from '@reduxjs/toolkit'
//TODO: learn redux from the redux tutorial: intialstate, slice, reducers and 
// why we doing all of this and point of redux.
const initialState = {
    username: null,
    name: null,
    email: null,
    uid: null,
    photoURL: null

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username,
                state.name = action.payload.name,
                state.email = action.payload.email,
                state.uid = action.payload.uid,
                state.photoURL = action.payload.photoURL
        },
        signOutUser: (state) => {
            state.username = null,
                state.name = null,
                state.email = null,
                state.uid = null,
                state.photoURL = null

        }
    }
});

export const { setUser, signOutUser } = userSlice.actions

export default userSlice.reducer