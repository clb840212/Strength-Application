import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import ExercisesContainer from './containers/ExercisesContainer';
import ExerciseShowContainer from './containers/ExerciseShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

  }
}

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={NavBar} >
          <IndexRoute component={ExercisesContainer} />
          <Route path='exercises' component={ExercisesContainer} />
          <Route path='exercises/:id' component={ExerciseShowContainer} />
        </Route>
      </Router>
    )
  }
}





export default App;
