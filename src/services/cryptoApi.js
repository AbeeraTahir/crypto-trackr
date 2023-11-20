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
    getCoinsData: builder.query({
      query: () => createRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    }),
    getCoinsDetails: builder.query({
      query: (id) => createRequest(`/coins/${id}?tickers=false&community_data=false&developer_data=false`)
    }),
  })
})


export const {
  useGetGlobalDataQuery,
  useGetCoinsDataQuery,
  useGetCoinsDetailsQuery,
} = cryptoApi

