import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
        // headers: {
        //   // Authorization: `Bearer `,
        // },
      }),
      invalidatesTags: ["Product"],
    }),

    getAllProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params,
      }),
      providesTags: ["Product"],
    }),

    editProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useEditProductMutation,
  useGetSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
