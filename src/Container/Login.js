import { Component, state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state={
        username:"",
        password:"",
        checkLogin:false
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token', response.data.token)

            this.setState({
                checkLogin : true
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div>
                <h1>Register</h1>
                <form>
                    <p>Username<input type="text" name="username"/></p>
                    <p>Password<input type="password" name="password"/></p>
                    <p> <button onClick={this.sendUserData}>Login</button></p>
                </form>
            </div>
        )
    }
}
export default Login;