import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;