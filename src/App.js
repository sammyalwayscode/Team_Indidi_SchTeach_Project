import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Elementry from './Components/Elementry/Elementry';
import HeroHeader from './Components/HeroHeader/HeroHeader';
import High from './Components/High/High';
import Middle from './Components/Middle/Middle';

function App() {
  return (
    <div>
      <Router>
        <HeroHeader />
        <Switch>
          <Route path="/" exact component={Elementry} />
          <Route path="/middlesch" exact component={Middle} />
          <Route path="/highsch" exact component={High} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
