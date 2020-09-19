import Head from 'next/head'
import Layout from '../components/layout'
import { withCustomApollo } from '../utils/withApollo'
import { useMyQueryQuery } from '../../graphql/codegen/generated'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/core'

function Home() {
  const { data, loading: queryLoading } = useMyQueryQuery({ ssr: true, fetchPolicy: 'cache-first' })
  const [session, sessionLoading] = useSession()
  return (
    <Layout>
      <Head>
        <title>Next.js × Nexus Todo App</title>
      </Head>
      <Grid as="header" templateColumns="repeat(2, minmax(0,1fr))" gap={5}>
        <Flex justifyContent="space-between">
          <Box>Ciao sono mauro</Box>
          <Box>Anche io </Box>
        </Flex>

        <Flex justifyContent="center">
          <Box>Questo è il mio momento</Box>
          <Box>Prova </Box>
        </Flex>
      </Grid>
    </Layout>
  )
}

export default withCustomApollo(Home, { getDataFromTree })
