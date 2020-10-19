import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react'
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Orphanage from './pages/Orphanage';
 
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/app" component={OrphanageMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/registration-success" component={RegistrationSuccess} />
        <Route path="/orphanages/:id" component={Orphanage} />
      
      </Switch>
        </BrowserRouter>
    );
}
export default Routes