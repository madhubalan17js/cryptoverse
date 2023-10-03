import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "226629f913msh31e809e8873afc2p194110jsn20caa830eb71",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safesearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptosNewsQuery } = cryptoNewsApi
