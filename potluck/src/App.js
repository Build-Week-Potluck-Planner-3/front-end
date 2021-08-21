import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Dashboard/Home';
import Register from './components/Register/Register';
import Calander from './components/Calendar/Calendar';
import Login from './components/Login/Login';
import CreateEvent from './components/Potlucks/CreateEvent';
import EditEvent from './components/Potlucks/EditEvent';
import EventList from './components/Potlucks/EventList';
import EventPage from './components/Potlucks/EventPage';
import Users from './components/Users/Users';
import UserPage from './components/Users/UserPage';
import Navigation from './components/Navigation/Navigation';


// these were created in help to keep things organized 
// unit 2 will now have a place to start building these forms / styles 

function App() {
  return (
    <div>
      <Navigation /> 
      <Switch>
        <PrivateRoute exact path="/Home" component={Home}/>
        <PrivateRoute exact path="/Calendar" component={Calendar}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/" component={Login}/>
        <PrivateRoute exact path="/potluckForm" component={potluckForm}/>
        <PrivateRoute exact path="/events/edit/:id" component={EditEvent}/>
        <PrivateRoute exact path="/events" component={EventList}/>
        <PrivateRoute exact path="/events/:id" component={EventPage}/>
        <PrivateRoute exact path="/users" component={Users}/>
        <PrivateRoute exact path="/users/:id" component={UserPage}/>
      </Switch>
    </div>
  );
}

export default App;
