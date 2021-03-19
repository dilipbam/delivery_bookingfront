import { Component } from "react";
import axios from 'axios';
class Register extends Component{
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
            <div>
                <h1>Register</h1>
                <form>
                    <p> First Name <input type="text" name="firstName" value={this.state.firstName} onChange={(event)=>{this.setState({firstName: event.target.value})}}/></p>
                    <p> Middle Name <input type="text" name="middleName" value={this.state.middleName} onChange={(event)=>{this.setState({middleName: event.target.value})}}/></p>
                    <p> Last Name <input type="text" name="lastName" value={this.state.lastName} onChange={(event)=>{this.setState({lastName: event.target.value})}}/></p>
                    <p> username <input type="text" name="userName" value={this.state.userName} onChange={(event)=>{this.setState({userName: event.target.value})}}/></p>
                    <p> Password <input type="password" name="password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/></p>
                    <p> Email <input type="text" name="email" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/></p>
                    <p> Contact <input type="text" name="contact" value={this.state.contact} onChange={(event)=>{this.setState({contact: event.target.value})}}/></p>
                    <p> <button onClick={this.sendUserData}>Submit</button></p>
                </form>
            </div>
        )
    }
}
export default Register;