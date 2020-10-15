import React from 'react';
import { Route } from 'react-router-dom';


const RouteWithLayout = ({layout: Layout,component:Component,...rest }) =>{
    return( <Route {...rest} render={(match)=>(
                    <Layout match = {match}>
                        <Component match= {match}></Component>
                    </Layout>
                    
                    )}>
                
            </Route>)
}

export default RouteWithLayout