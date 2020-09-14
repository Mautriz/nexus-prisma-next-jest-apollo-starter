import Head from 'next/head'
import Layout from '../components/layout'
import { useQuery } from 'urql'

export default function Home() {
  const [res, refetch] = useQuery({
    query: /* graphql */ `
  query MyQuery {
    first {
      second {
        shird {
          fourth
        }
      }
    }
  }
  `,
  })
  console.log(res)
  return (
    <Layout>
      <Head>
        <title>Next.js × Nexus Todo App</title>
      </Head>
      Ciao
    </Layout>
  )
}
