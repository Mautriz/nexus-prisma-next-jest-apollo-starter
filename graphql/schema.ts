import { schema, server, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

use(
  prisma({
    features: {
      crud: true,
    },
  })
)

schema.objectType({
  name: 'Todo',
  definition(t) {
    t.model.id()
    t.model.description()
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.crud.todos()
    t.string('prova', {
      resolve() {
        return 'prova'
      },
    })
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneTodo()
  },
})
