# dan-apollo-client-skeleton

```bash
#Install
git clone https://gitea-tooling.az.devops.gdpdentsu.net/node-experts/dan-apollo-client-skeleton.git
npm install

#Run at localhost:3000
npm start

#Lint
npm run lint

#Lint fix
npm run lint-fix

#Build
npm run build
```

## Connect Apollo to your application

Apollo is already configured in the application to connect apollo in your application you have to follow below steps :

- Add two variables in .env file named REACT_APP_APOLLO_GRAPHQL_URI and REACT_APP_APOLLO_SUBSCRIPTION_URI

- In your provider.jsx file in the src directory of your project import ConnectApollo from apollo directory and wrap all the child you have in your provider with ConnectApollo.

```javascript
// In .env file
REACT_APP_APOLLO_GRAPHQL_URI=http://apolloURL:apolloPort
REACT_APP_APOLLO_SUBSCRIPTION_URI=ws://apolloURL:apolloPort

// In provider.jsx file
import ConnectApollo from './apollo';

const Provider = () => (
  <ConnectApollo>
    {children}
  </ConnectApollo>
);
```

## Connect Okta to your application

Follow below steps :

```bash
# In root of your project
npm install @okta/okta-react --save
```
```javascript
// In .env file
REACT_APP_OKTA_ISSUER='OKTA_ISSUER'
REACT_APP_OKTA_REDIRECT='OKTA_REDIRECT_URI'
REACT_APP_CLIENT_ID='OKTA_CLIENT'

// In App.jsx file of your src directory
import { ImplicitCallback, Security, SecureRoute } from '@okta/okta-react';

const App = () => (
  <Router>
    <RouteNotFoundWrapper>
      <Security {...okta.config}>
        <Switch>
          <SecureRoute path="/dashboard" component={Dashboard} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Switch>
      </Security>
    </RouteNotFoundWrapper>
  </Router>
);
```

## Connect MUI Theme Provier in your application

```bash
npm install @material-ui/core
```
```javascript
// In Provider.jsx file inside src directory
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

const Provider = () => (
  <ConnectApollo>
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  </ConnectApollo>
);

// Create a theme.js file inside the src directory
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    // your sytles here
  },
});

export default theme;
```
