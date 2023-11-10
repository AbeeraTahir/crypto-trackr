import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'accept': 'application/json'
}

const baseUrl = "https://api.coingecko.com/api/v3"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGlobalData: builder.query({
      query: () => createRequest(`/global`)
    }),
  })
})


export const {
  useGetGlobalDataQuery,
} = cryptoApi

