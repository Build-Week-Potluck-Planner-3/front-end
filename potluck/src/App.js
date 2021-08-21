import './App.css';
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
        <PrivateRoute exact path="/Calendar" component={Calander}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/" component={Login}/>
        <PrivateRoute exact path="/CreateEvent" component={CreateEvent}/>
        <PrivateRoute exact path="/EditEvent/:id" component={EditEvent}/>
        <PrivateRoute exact path="/Events" component={EventList}/>
        <PrivateRoute exact path="/Events/:id" component={EventPage}/>
        <PrivateRoute exact path="/Users" component={Users}/>
        <PrivateRoute exact path="/Users/:id" component={UserPage}/>
      </Switch>
    </div>
  );
}

export default App;
