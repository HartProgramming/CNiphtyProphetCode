import { Router, Switch, Route } from 'react-router-dom';

import FrontPage from './components/FrontPage/Frontpage';

import History from './components/History/History'
import MainApplication from './components/MainApplication/MainApplication'

function Routes(){
    

    return(
        <Router history={History}>
            <Switch>
                <Route path='./components/FrontPage' component={FrontPage} />
                <Route path='./components/MainApplication/MainApplication' component={MainApplication} />
            </Switch>
        </Router>
    )
}

export default Routes