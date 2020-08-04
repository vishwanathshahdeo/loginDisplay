import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './itemList';
import Login from './login';

class App extends Component {
 
    render() {
        return (
            <Router>
                <Switch>
                <Route path="/" exact component={Login} />
                    <Route path="/itemList" exact component={ItemList} />
                    
                </Switch>
            </Router>

        );
    } 
}

export default App;
