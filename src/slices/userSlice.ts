import { createSlice } from "@reduxjs/toolkit";

type state = {
    phone: String | null,
    name: String | null,
    surname: String | null
    id: Number | null
}

const initialState: state = {
    phone: null,
    name: '',
    surname: '',
    id: null,
}


const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state, action) => {
            state.phone = action.payload.phone
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.id = action.payload.id
        },

        removeUser: (state) => {
            state.phone = null
            state.name = null
            state.surname = null
            state.id = null
        }
    },
})

const { actions, reducer } = userSlice;
export default reducer;
export const { setUser, removeUser } = actions;
