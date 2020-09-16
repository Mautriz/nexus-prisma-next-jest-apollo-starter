import Head from 'next/head'
import Layout from '../components/layout'
import { withCustomApollo } from '../utils/withApollo'
import { useMyQueryQuery } from '../../graphql/codegen/generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { signIn, signOut, useSession } from 'next-auth/client'

function Home() {
  const { data, loading: queryLoading } = useMyQueryQuery({ ssr: true, fetchPolicy: 'cache-first' })
  const [session, sessionLoading] = useSession()
  if (sessionLoading) return <div>LOADING</div>
  if (session) return <div>{session.user.email}</div>
  return (
    <Layout>
      <Head>
        <title>Next.js × Nexus Todo App</title>
      </Head>
      {JSON.stringify(data)}
    </Layout>
  )
}

export default withCustomApollo(Home, { getDataFromTree })
