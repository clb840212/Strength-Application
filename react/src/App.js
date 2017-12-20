import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import TestContainer from './containers/TestContainer';

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
          <IndexRoute component={TestContainer} />
        </Route>
      </Router>
    )
  }
}





export default App;
