import { createSlice } from "@reduxjs/toolkit";

const signInModalSlice = createSlice({
    name: "signinModal",
    initialState: {
        show: false
    },
    reducers: {
        setSignin: (state, { payload }) => {
            state.show = payload
        }
    }
})

export const { setSignin } = signInModalSlice.actions
export default signInModalSlice.reducer