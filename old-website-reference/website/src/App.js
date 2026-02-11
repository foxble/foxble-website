import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Faqs from './components/pages/Faqs'
import Support from './components/pages/Support'
import Policies from './components/pages/Policies'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            <Route path={'/About'} component={About}></Route>
            <Route path={'/Contact'} component={Contact}></Route>
            <Route path={'/Faqs'} component={Faqs}></Route>
            <Route path={'/Support'} component={Support}></Route>
            <Route path={'/Policies'} component={Policies}></Route>	  
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
