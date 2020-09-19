import styles from './layout.module.css'
import { Box } from '@chakra-ui/core'

export default function Layout(params: { children: any }) {
  const children = params.children
  return (
    <div className={styles.container}>
      <Box as="main" w="100%">
        {children}
      </Box>
    </div>
  )
}
