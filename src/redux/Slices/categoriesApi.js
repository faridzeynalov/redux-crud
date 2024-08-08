import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../api'

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/',
      providesTags: ['Categories'],
    }),
    getCategoryByName: builder.query({
      query: (name) => `/${name}`,
    }),
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: '/',
        method: 'POST',
        body: newCategory,
      }),
      invalidatesTags: ['Categories'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: put,
      }),
      invalidatesTags: ['Categories'],
    }),
    partialUpdateCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Categories'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),
    getFuckOFf: builder.mutation({

    })
  }),
})


export const {
  useGetCategoriesQuery,
  useGetCategoryByNameQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  usePartialUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi