import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    getCommentsByPostId: builder.query({
      query: (postId) => `posts/${postId}/comments`,
    }),
  }),
});

export const { useGetPostsQuery, useGetCommentsByPostIdQuery } = postsApi;
