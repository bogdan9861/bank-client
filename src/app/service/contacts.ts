import { api } from "./api";

export type Contact = {
  id: string,
  name: string;
  phoneNumber: string;
};

export const contactsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => ({
        url: "/contacts/",
        method: "GET",
      }),
    }),
    addContact: builder.mutation<Contact, Contact>({
      query: (contact) => ({
        url: "/contacts/add",
        body: contact,
        method: "POST",
      }),
    }),
    removeContact: builder.mutation<Contact, string>({
      query: (id) => ({
        url: `/contacts/remove/${id}`,
        body: id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
export const { addContact, getContacts, removeContact } = contactsApi.endpoints;
