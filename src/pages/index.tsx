import Head from 'next/head'
import Layout from '../components/layout'
import { withCustomApollo } from '../utils/withApollo'
import { useMyQueryQuery } from '../../graphql/codegen/generated'
import { getDataFromTree } from '@apollo/client/react/ssr'

function Home() {
  const { data, loading } = useMyQueryQuery({ ssr: true, fetchPolicy: 'cache-first' })
  if (loading) return <div>LOADING</div>
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
