module.exports = {
  client: {
    service: {
      name: 'Dinner Ranking',
      url: 'https://dinner-ranking.hasura.app/v1/graphql',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
}
