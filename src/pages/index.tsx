import Head from 'next/head'
import { useMutation, useQuery } from 'urql'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js × Nexus Todo App</title>
      </Head>
      Ciao
    </Layout>
  )
}
