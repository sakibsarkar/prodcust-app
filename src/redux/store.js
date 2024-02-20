"use client";
import signInModalSilce from "./slices/signInModalSilce";
import signUpModalSlice from "./slices/signupModalSilce";
import userSlice from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userSlice,
        signUpModal: signUpModalSlice,
        signInModal: signInModalSilce,
    },
});

export default store
