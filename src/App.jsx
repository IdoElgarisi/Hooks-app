import { connect } from 'react-redux';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { About } from './pages/About';
import { HomePage } from './pages/HomePage';
import { RobotApp } from './pages/RobotApp';
import { RobotDetails } from './pages/RobotDetails';
import { RobotEdit } from './pages/RobotEdit';

function _App({ loggedInUser }) {

  const PrivateRoute = (props) => {
    // return props.isAdmin ? <Route {...props} /> : <Redirect to="/" />
    return loggedInUser ? <Route path={props.path} component={props.component} /> : <Redirect to="/" />
  }

  return (
    <Router>
      <AppHeader />
      <main className="container">
        <Switch>
          <Route path="/robot/edit/:id?" component={RobotEdit} />
          <Route path="/robot/:id" component={RobotDetails} />
          <Route path="/robot" component={RobotApp} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/" component={HomePage} /* isAdmin={true} */ />
        </Switch>
      </main>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.userModule.loggedInUser,
  }
}

export const App = connect(mapStateToProps)(_App)