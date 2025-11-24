import { baseApi } from "./baseApi";

const contactMessageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactMessages: builder.query({
      query: (params) => ({
        url: "/contact-messages",
        method: "GET",
        params,
      }),
      providesTags: ["Contact"],
    }),

    getSingleContactMessage: builder.query({
      query: (id) => `/contact-messages/${id}`,
      providesTags: ["Contact"],
    }),

    deleteContactMessage: builder.mutation({
      query: (id) => ({
        url: `/contact-messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetAllContactMessagesQuery,
  useGetSingleContactMessageQuery,
  useDeleteContactMessageMutation,
} = contactMessageApi;
