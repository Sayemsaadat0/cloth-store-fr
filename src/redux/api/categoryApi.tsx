import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getAllCategories: builder.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Category"],
    }),

    editCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useEditCategoryMutation,
  useGetSingleCategoryQuery,
  useDeleteCategoryMutation,
} = categoryApi;
