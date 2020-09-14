import { App } from 'nexus/dist/runtime/app'

if (process.env.NODE_ENV === 'development') require('nexus').default.reset()

const app: App = require('nexus').default

app.settings.change({
  server: {
    cors: false,
    playground: {
      enabled: true,
    },
  },
})

require('../../../graphql/schema')

app.assemble()

export default app.server.handlers.graphql
