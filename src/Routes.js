import React from 'react';
import {Switch , Redirect} from 'react-router-dom'
import  RouteWithLayout from './components/RouteWithLoyout/RouteWithLasyout'
import Main from './Layout/Main/Main';
import Minimal from './Layout/Minimal/Minimal';
import Campaign from './views/campaign/Campaign';
import CreateCamp from './views/createCampaign/CreateCamp';
import NotFound from './views/notFound/NotFound';




const Routes =()=>{
    return(<Switch>
                <Redirect
                    exact
                    from="/"
                    to="/campaign"
                />
                    <RouteWithLayout
                    exact
                    path="/campaign"
                    layout = {Main}
                    component = {Campaign}
                    />
                    <RouteWithLayout
                    exact
                    path="/createcamp"
                    layout = {Main}
                    component = {CreateCamp}
                    />
                    <RouteWithLayout
                    exact
                    path="/not-found"
                    layout = {Minimal}
                    component = {NotFound}
                    />
                <Redirect to="/not-found" />
            </Switch>)
}

export default Routes;