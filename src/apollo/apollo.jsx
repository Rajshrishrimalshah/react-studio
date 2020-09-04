import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http'; // eslint-disable-line
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import PropTypes from 'prop-types';
import config from '../config/config';

const { uri, subsUri } = config;
const httpLink = new HttpLink({
  uri,
});

const wsLink = new WebSocketLink({
  uri: subsUri,
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const ConnectApollo = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

ConnectApollo.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default ConnectApollo;
