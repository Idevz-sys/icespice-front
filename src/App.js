import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import Corporate from "./pages/Corporate";

// Import Css Here 
import './assets/scss/style.scss';

const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    {/* <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Splash}/> */}
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Corporate}/>
                </Switch>
            </PageScrollTop>
        </Router>
    )
}

export default App
