import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Link to="/"></Link>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
    </div>
  );
}

export default App;
