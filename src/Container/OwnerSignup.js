import { Component } from "react";
import axios from 'axios';
import { ThemeProvider } from "@material-ui/styles";

class OwnerSignup extends Component{
    state = {
        FirstName : "",
        LastName  : "",
        UserName : "",
        password : "",
        Email : "",
        contact : ""
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data={
            FirstName : this.state.FirstName,
            LastName  : this.state.LastName,
            UserName : this.state.UserName,
            Password : this.state.Password,
            Email : this.state.Email,
            Contact : this.state.Contact
        }
        axios.post("http://localhost:90/register", data)
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
                                <h4 className="modal-title">SignUp to create new Owner account</h4>
                                <div className="form-group">
                                <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.state.FirstName} onChange={(event)=>{this.setState({FirstName: event.target.value})}} />
                                </div>
                                <div className="form-group">
                                <input type="text" name="lastName" className="form-control" placeholder="Last name" value={this.state.LastName} onChange={(event)=>{this.setState({LastName: event.target.value})}} />
                                </div>
                                <div className="form-group">
                                <input type="text" name="userName" className="form-control" placeholder="User name" value={this.state.UserName} onChange={(event)=>{this.setState({UserName: event.target.value})}} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Enter password" required="required" value={this.state.Password} onChange={(event) => { this.setState({Password: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" placeholder="Enter email" required="required" value={this.state.Email} onChange={(event) => { this.setState({Email: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="contact" className="form-control" placeholder="Enter contact" required="required" value={this.state.Contact} onChange={(event) => { this.setState({Contact: event.target.value }) }} />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block btn-lg" value="SignUp" onClick={this.sendUserData} />
                            </form>
                            
                            <div className="text-center small">Already have an account? <a href="/login">Login</a></div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>            
        )};
}
export default OwnerSignup;