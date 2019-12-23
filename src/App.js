import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import Ordering from './components/views/Ordering/Ordering';
import Kitchen from './components/views/Kitchen/Kitchen';
import NewOrder from './components/views/Ordering/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/ :id`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/ :id`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/ :id`} component={Ordering} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
