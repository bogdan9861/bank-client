import { createSlice } from "@reduxjs/toolkit"
import { Contact, contactsApi } from "../app/service/contacts"
import { RootState } from "../app/store/store"

type InitialState = {
    contacts: Omit<Contact, "id">[] | null
}

const initialState: InitialState = {
    contacts: null
}

const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(contactsApi.endpoints.getContacts.matchFulfilled, (state, action) => {
                state.contacts = action.payload
            })
            .addMatcher(contactsApi.endpoints.addContact.matchFulfilled, (state, action) => {
                state.contacts?.push(action.payload)
            })
            .addMatcher(contactsApi.endpoints.removeContact.matchFulfilled, (state, action) => {
                state.contacts = action.payload;
            })
    }
})

export default ContactSlice.reducer;
export const SelectContacts = (state: RootState) => state.contacts.contacts;