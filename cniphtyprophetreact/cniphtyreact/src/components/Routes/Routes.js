import { Router, Switch, Route } from 'react-router-dom';

import FrontPage from './components/FrontPage/Frontpage';

import History from './History'

function Routes(){
    

    return(
        <Router history={History}>
            <Switch>
                <Route path='./components/FrontPage' component={FrontPage} />
            </Switch>
        </Router>
    )
}

export default Routes