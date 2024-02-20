import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        signInAuth: (state, { payload }) => {
            state.user = payload
        },
        signOut: (state) => {
            state.user = {}
        },
    },
});

export const { signInAuth, signOut } = userSlice.actions;

export default userSlice.reducer;
