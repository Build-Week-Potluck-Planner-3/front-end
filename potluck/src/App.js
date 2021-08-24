import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PotluckForm from './components/Potlucks/PotluckForm';
import EditEvent from './components/Potlucks/EditEvent';
import EventList from './components/Potlucks/EventList';
import EventPage from './components/Potlucks/EventPage';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


// these were created in help to keep things organized 
// unit 2 will now have a place to start building these forms / styles 

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <PrivateRoute exact path="/Home" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/potluckForm" component={PotluckForm} />
        <PrivateRoute exact path="/events/edit/:id" component={EditEvent} />
        <PrivateRoute exact path="/events" component={EventList} />
        <PrivateRoute exact path="/events/:id" component={EventPage} />
      </Switch>
    </div>
  );
}

export default App;
