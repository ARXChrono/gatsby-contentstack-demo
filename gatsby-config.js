const { ACTIVE_ENV, NODE_ENV } = process.env
const activeEnv = ACTIVE_ENV || NODE_ENV || 'development'
require('dotenv').config({ path: `.env.${activeEnv}` })
console.log(`Using environment config: '${activeEnv}'`)
const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_ACCESS_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
} = process.env

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options: {
        api_key: CONTENTSTACK_API_KEY,
        delivery_token: CONTENTSTACK_ACCESS_TOKEN,
        environment: CONTENTSTACK_ENVIRONMENT,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
