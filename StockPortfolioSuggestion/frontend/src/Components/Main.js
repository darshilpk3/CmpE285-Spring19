import React,{Component} from 'react';
import {Route} from 'react-router-dom'; 
import Home from './Home/Home'
import '../App.css'

class Main extends Component{

    render(){
        return(
            <div>
                <Route exact path="/" component={Home}></Route>
            </div>
        )
    }
}

export default Main;