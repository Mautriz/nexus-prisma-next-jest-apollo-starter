import { schema, server, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

use(
  prisma({
    features: {
      crud: true,
    },
    paginationStrategy: 'prisma',
  })
)

schema.objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.description()
    t.model.title()
    t.model.userId()
    t.model.user()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.users()
    t.crud.user()
    t.crud.posts()
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser({})
    t.crud.createOnePost({})
  },
})
