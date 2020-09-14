import { ApolloClient, ApolloClientOptions } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

let globalApolloClient: ApolloClient<NormalizedCacheObject>

export const CreateClient = (
  options: ApolloClientOptions<NormalizedCacheObject>
): ApolloClient<NormalizedCacheObject> =>
  Object.assign(
    new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
              console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
            )
          if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        new HttpLink({
          uri: '/api/graphql',
          credentials: 'same-origin',
        }),
      ]),
      cache: new InMemoryCache({
        cacheRedirects: {
          Query: {},
        },
      }),
    }),
    options
  )

export const initApolloClient = (initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return CreateClient({
      cache: new InMemoryCache().restore(initialState || {}),
    })
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = CreateClient({
      cache: new InMemoryCache().restore(initialState || {}),
    })
  }

  return globalApolloClient
}
