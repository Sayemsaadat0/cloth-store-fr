import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/product-category/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getAllCategories: builder.query({
      query: (params) => ({
        url: "/product-category",
        params,
      }),
      providesTags: ["Category"],
    }),

    editCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product-category/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getSingleCategory: builder.query({
      query: (id) => `/product-category/${id}`,
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/product-category/${id}`,
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
