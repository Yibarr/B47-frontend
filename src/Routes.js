import {
  Switch,
  Route
} from 'react-router-dom'

import {
  NotFound,
  NewsFeed,
  Profile,
  Login,
  Signup
} from './pages/index.js'


const Routes = () => (
    <Switch>
      <Route exact path="/" component={NewsFeed}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/profile" component={Profile}/>
      <Route component={NotFound}/>
    </Switch>
 )

 export default Routes