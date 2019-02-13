import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import News from './components/News/News';
import Navbar from './components/CustomNavbar/CustomNavbar'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/news" component={News}/>
                    <Route path="/" component={Home} exact/>
                </Switch>
        </React.Fragment>
    );
  }
}

export default App;
