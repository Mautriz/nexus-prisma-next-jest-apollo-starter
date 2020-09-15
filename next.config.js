const { redirect } = require('next/dist/next-server/server/api-utils')

module.exports = (__, { defaultConfig }) => {
  return {
    // compress: true,
    // pageExtensions: ['tsx'],
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
}
