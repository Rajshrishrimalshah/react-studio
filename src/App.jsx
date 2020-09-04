import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Routes, { PrivateRoute } from './router';
import { MainLayout } from './layouts';

const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  centerText: {
    color: '#000',
    backgroundColor: '#EDEDED',
    padding: '100px',
    borderRadius: '1.5%',
  },
};

const Message = () => (
  <div className="app" style={styles.root}>
    <div style={styles.centerText}>
      <h1>Welcome to React Apollo Basic Architecture</h1>
      <p>For Basic implementation go through README file in git repository</p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Message} />
      <Route
        path="/dashboard"
        render={
          prop => <PrivateRoute {...prop} component={Routes} layout={MainLayout} />
        }
      />
    </Switch>
  </BrowserRouter>
);

export default App;
