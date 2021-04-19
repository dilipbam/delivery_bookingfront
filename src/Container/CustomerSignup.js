import { Component } from "react";
import axios from 'axios';

class CustomerSignup extends Component{
    state = {
        firstName : "",
        middleName : "",
        lastName : "",
        userName : "",
        password : "",
        email : "",
        contact : ""
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data={
            firstName : this.state.firstName,
            middleName : this.state.middleName,
            lastName : this.state.lastName,
            userName : this.state.userName,
            password : this.state.password,
            email : this.state.email,
            contact : this.state.contact
        }
        axios.post("http://localhost:90/customerRegister", data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render(){
        return(
            <form>
                <h1>Register</h1>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.state.firstName} onChange={(event)=>{this.setState({firstName: event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" name="middleName" className="form-control" placeholder="Middle name" value={this.state.middleName} onChange={(event)=>{this.setState({middleName: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="email" name="lastName" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={(event)=>{this.setState({lastName: event.target.value})}}/>
                </div>

                <div className="form-group">
                    <label>username</label>
                    <input type="text" name="userName" className="form-control" placeholder="Enter username" value={this.state.userName} onChange={(event)=>{this.setState({userName: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" name="contact" className="form-control" placeholder="Enter contact" value={this.state.contact} onChange={(event)=>{this.setState({contact: event.target.value})}} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.sendUserData}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./SignIn">log in?</a>
                </p>
            </form>            
        )
    }
}

export default CustomerSignup;