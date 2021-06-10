import {Route, Switch} from 'react-router-dom';
import Groups from '../pages/groups/groups';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
            {/* <Route path='/dashboard/groups'>
                <Group/>
            </Route>
            <Route path='/dashboard/groups'>
                <Home/>
            </Route>
            <Route path='/dashboard/groups'>
                <Habitsd/>
            </Route> */}
        </Switch>
    )
}

export default routesDashboard;