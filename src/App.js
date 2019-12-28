import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Login from './components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import Ordering from './components/views/Ordering/Ordering';
import Kitchen from './components/views/Kitchen/Kitchen';
import NewOrder from './components/views/Ordering/NewOrderContainer';
import Grid from '@material-ui/core/Grid';
import PageNav from './components/views/PageNav/PageNav';
//import Container from '@material-ui/core/Container';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Grid container direction='row'>
            <Grid container  spacing={2} >
              <PageNav/>         
            </Grid>
            <Grid container>
              <Switch >
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
            </Grid>
          </Grid>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
