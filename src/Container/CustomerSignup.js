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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="login-form">

                            <form action="" method="post">
                                <h4 className="modal-title">SignUp to create new Customer account</h4>
                                <div className="form-group">
                                    <input type="text" name="firstName" className="form-control" placeholder="Enter first name" required="required" value={this.state.firstName} onChange={(event) => { this.setState({ firstName: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="middleName" className="form-control" placeholder="Enter middle name" required="required" value={this.state.middleName} onChange={(event) => { this.setState({ middleName: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="lastName" className="form-control" placeholder="Enter last name" required="required" value={this.state.lastName} onChange={(event) => { this.setState({ lastName: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" placeholder="Enter username" required="required" value={this.state.userName} onChange={(event) => { this.setState({ userName: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Enter password" required="required" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" placeholder="Enter email" required="required" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="contact" className="form-control" placeholder="Enter contact" required="required" value={this.state.contact} onChange={(event) => { this.setState({ contact: event.target.value }) }} />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block btn-lg" value="SignUp" onClick={this.sendUserData} />
                            </form>
                            
                            <div className="text-center small">Already have an account? <a href="/login">Login</a></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default CustomerSignup;