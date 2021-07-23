require('dotenv').config()

module.exports = {
  schema: [
    {
      'https://dinner-ranking.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.{graphql,gql}'],
  overwrite: true,
  generates: {
    './src/generated/graphqlOperations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
