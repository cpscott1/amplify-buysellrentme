import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import Faq from './Faq'

function App() {
  return (
    <div className="App">
      <Link to="/"></Link>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/sell' component={Faq} />
    </div>
  );
}

export default App;
