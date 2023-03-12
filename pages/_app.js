import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { useMemo } from 'react'

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://blackzone.co.ua/graphql"
    }),
    cache: new InMemoryCache(),
  })
}

export default function App({ Component, pageProps }) {
  const apolloClient = useMemo(() => createApolloClient(), [])
  return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
  )
}
