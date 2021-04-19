import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token')
        
        window.location.href = '/Signin';
    }
    render(){
        return(
            <div>Unauthorized</div>
        )        
    }
}

export default Logout;