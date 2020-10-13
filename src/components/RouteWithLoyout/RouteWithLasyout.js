import React from 'react';
import { Route } from 'react-router-dom';


const RouteWithLayout = ({layout: Layout,component:Component,...rest }) =>{
    return( <Route {...rest} render={(match)=>(
                    <Layout match = {match}>
                        <Component></Component>
                    </Layout>
                    
                    )}>
                
            </Route>)
}

export default RouteWithLayout