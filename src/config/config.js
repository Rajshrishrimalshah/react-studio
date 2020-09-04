const envVars = process.env;
const configuration = {
  uri: `${envVars.REACT_APP_APOLLO_GRAPHQL_URI}/graphql`,
  subsUri: `${envVars.REACT_APP_APOLLO_SUBSCRIPTION_URI}/graphql`,
  okta: {
    issuer: envVars.REACT_APP_OKTA_ISSUER,
    redirect_uri: `${envVars.REACT_APP_OKTA_REDIRECT}/implicit/callback`,
    client_id: envVars.REACT_APP_CLIENT_ID,
  },
};
export default configuration;
