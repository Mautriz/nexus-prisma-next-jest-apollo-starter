import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const SERVER_URL = process.env.SERVER_URL || 'localhost:3000'

export const withCustomApollo = withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: `http://${SERVER_URL}/api/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  }
)
