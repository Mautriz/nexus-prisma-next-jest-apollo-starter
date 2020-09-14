import Head from 'next/head'
import Layout from '../components/layout'
import { withCustomApollo } from '../utils/withApollo'

function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js × Nexus Todo App</title>
      </Head>
      Ciao
    </Layout>
  )
}

export default withCustomApollo(Home, {})
