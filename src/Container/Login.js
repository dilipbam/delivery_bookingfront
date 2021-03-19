import { Component } from "react";

class Login extends Component{
    render(){
        return(
            <div>
                <h1>Register</h1>
                <form>
                    <p><input type="text" name="username"/></p>
                    <p><input type="text" name="password"/></p>
                </form>
            </div>
        )
    }
}
export default Login;