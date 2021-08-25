import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PotluckForm from './components/Potlucks/PotluckForm';
import EditEvent from './components/Potlucks/EditEvent';
import PotluckList from './components/Potlucks/PotluckList';
import Potluck from './components/Potlucks/Potluck';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        {/* changed PrivateRoute to Route just so I could see the Home component while I work on it */}
        <Route exact path = "/home" component = {Home}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/" component = {Login}/>
        <PrivateRoute exact path = "/addPotluck" component = {PotluckForm}/>
        <PrivateRoute exact path = "/potlucks/edit/:id" component = {EditEvent}/>
        <PrivateRoute exact path = "/potlucks" component = {PotluckList}/>
        <PrivateRoute exact path = "/potlucks/:id" component = {Potluck}/>
      </Switch>
    </div>
  );
}

export default App;
