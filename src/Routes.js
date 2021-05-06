import React from 'react';
import {Switch , Redirect} from 'react-router-dom'
import  RouteWithLayout from './components/RouteWithLoyout/RouteWithLasyout'
import Main from './Layout/Main/Main';
import Minimal from './Layout/Minimal/Minimal';
import Campaign from './views/campaign/Campaign';
import CreateCamp from './views/createCampaign/CreateCamp';
import NotFound from './views/notFound/NotFound';
import ResumeGral from './views/ResumeGral/ResumeGral';
import CreateTemplate from './views/CreateTemplate/CreateTemplate'
import TemplateGenerator from './views/templateGenerator/TemplateGenerator'
import TemplateEdit from './views/templateEdit/TemplateEdit'
import Segment from './views/segment/Segment.js'


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
                    path="/campaign/:id"
                    layout = {Main}
                    component = {ResumeGral}
                    />
                    <RouteWithLayout
                    exact
                    path="/segment"
                    layout = {Main}
                    component = {Segment}
                    />
                    <RouteWithLayout
                    exact
                    path="/template_generator"
                    layout = {Main}
                    component = {TemplateGenerator}
                    />
                    <RouteWithLayout
                    exact
                    path="/template_edit"
                    layout = {Main}
                    component = {TemplateEdit}
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