import { createSlice } from "@reduxjs/toolkit";

export const signUpModalSlice = createSlice({
    name: "signUpModal",
    initialState: {
        show: false
    },
    reducers: {
        setSignup: (state, { payload }) => {
            console.log(payload);
            state.show = payload
        }
    }
})

export const { setSignup } = signUpModalSlice.actions
export default signUpModalSlice.reducer