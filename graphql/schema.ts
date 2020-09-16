import { schema, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import { prismaClient } from './configs/prismaClient'

use(
  prisma({
    features: {
      crud: true,
    },
    paginationStrategy: 'prisma',
  })
)

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.posts()
  },
})

schema.objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.description()
    t.model.title()
    t.model.user()
    t.model.userId()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.user()
    t.crud.post()
    t.crud.posts()
    t.crud.users()
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser({})
  },
})

schema.objectType({
  name: 'Ciao',
  definition(t) {
    t.string('helloWorld')
  },
})

let n = 0

schema.queryType({
  definition(t) {
    t.field('ciao', {
      type: 'Ciao',
      resolve(root, args, ctx, info) {
        console.log(n++)
        return { helloWorld: 'ciao' }
      },
    })
  },
})

schema.mutationType({
  definition(t) {
    t.boolean('createShit', {
      resolve() {
        return true
      },
    })
  },
})

// schema.extendType({
//   type: 'Subscription',
//   definition(t) {
//     t.field('ciao', {
//       resolve() {
//         return ''
//       }
//     })
//   }
// })
