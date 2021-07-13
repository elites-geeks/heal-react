import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './Main.scss'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/signin/Signin'
import Dashboards from '../dashboards/Dashboards'
import Head from '../../components/Head/Head'
import AboutUs from '../../components/AboutUs/AboutUs'
function Main() {
    return (
        <div className="main" style={{ flexGrow: 1 }}>
            <Dashboards />
            <Switch>
                <Route exact path='/'>
                    <Head />
                </Route>
                <Route path='/register'>
                    <SignUp />
                </Route>
                <Route path='/login'>
                    <SignIn />
                </Route>
                <Route path='/aboutus'>
                    <AboutUs />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
