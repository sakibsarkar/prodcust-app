import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, { payload }) => {
            state.data = payload
        }
    }
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer