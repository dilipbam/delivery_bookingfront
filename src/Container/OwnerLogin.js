import { Component, state, changeHandler, submitLogin } from "react";
import axios from 'axios';

class OwnerLogin extends Component{
    state={
        userName:"",
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
        console.log(this.state)
        
            axios.post("http://localhost:90/login1", this.state)
            .then((response)=>{
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('UserType', response.data.UserType)            
    
                this.setState({
                    checkLogin : true,
                    success:response.data.success
                })
            })
            .catch((err)=>{
                console.log(err.response)
            })
              
        }               
    
    render(){
        if(this.state.checkLogin===true){
            //redirect to dashboard
            window.location.href="/home"
        }
        
        else{
            console.log('Please Login')
        }
        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="login-form">
                            <form action="" method="post">
                                <h4 className="modal-title">Login to Your Account</h4>
                                <div className="form-group">
                                    <input type="text" name="userName" className="form-control" placeholder="Username" required="required" value={this.state.userName} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Password" required="required" value={this.state.password} onChange={this.changeHandler} />
                                </div>
                                <div className="form-group small clearfix">
                                    <label className="form-check-label"><input type="checkbox" /> Remember me </label>
                                    <a href="#" className="forgot-link">Forgot Password?</a>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" onClick={this.submitLogin} />
                            </form>
                            <div className="text-center small">Don't have an account? <a href="/register">Sign up</a></div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
export default OwnerLogin;