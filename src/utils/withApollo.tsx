// lib/withApollo.js
import { ApolloProvider } from '@apollo/react-hooks'
import { initApolloClient } from './CreateClient'
import { withApollo } from 'next-with-apollo'

export const withCustomApollo = withApollo(
  ({ initialState, ctx }) => {
    return initApolloClient(initialState, ctx)
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
