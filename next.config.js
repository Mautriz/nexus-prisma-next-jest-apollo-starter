const { redirect } = require('next/dist/next-server/server/api-utils')

module.exports = {
  async redirects() {
    return [
      {
        source: '/graphql',
        destination: '/api/graphql',
        permanent: true,
      },
    ]
  },
}
