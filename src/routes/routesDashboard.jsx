import {Route, Switch} from 'react-router-dom';
import Groups from '../pages/groups/groups';
import HomeDashboard from '../pages/homeDashboard/homeDashboard';
import Group from '../pages/group/Group';

const routesDashboard = () => {
    return (
        <Switch>
            <Route path='/dashboard/home'>
                <HomeDashboard/>
            </Route>
            <Route path='/dashboard/groups'>
                <Groups/>
            </Route>
            <Route path='/dashboard/group'>
                <Group/>
            </Route>
        </Switch>
    )
}

export default routesDashboard;