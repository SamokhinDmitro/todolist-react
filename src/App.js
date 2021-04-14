import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {Switch, Route, Redirect} from 'react-router-dom';
import Contacts from "./components/Contacts/Contacts";


export default class  App extends React.Component{

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={() => <About title="About Pages"/> } />
                <Route path="/contacts" component={Contacts}/>
                <Redirect to={'/'}/>
            </Switch>
        );
    }

}
