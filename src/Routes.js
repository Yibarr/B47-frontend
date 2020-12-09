import {
  PrivateRoute
} from './components/index.js'

import {
  Switch,
  Route
} from 'react-router-dom'

import {
  NotFound,
  NewsFeed,
  Profile,
  Login,
  Signup,
  Logout
} from './pages/index.js'


const Routes = () => (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <PrivateRoute exact path="/" component={NewsFeed}/>
      <PrivateRoute exact path="/logout" component={Logout}/>
      <PrivateRoute exact path="/profile" component={Profile}/>
      <Route component={NotFound}/>
    </Switch>
 )

 export default Routes