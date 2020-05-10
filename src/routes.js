import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Tasks from './Components/Tasks';
import Login from './Components/Login';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            
            <Route path="/login" component={Login}/>
            <Route path="/Tasks" component={Tasks}/>
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;