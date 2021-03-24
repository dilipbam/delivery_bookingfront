import { Component } from "react";
import Register from './Register';
import Login from './Login';
import {Route} from 'react-router-dom';
import AddProduct from "../Body/AddProduct";

class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">This is test div.</div>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/addproduct' component={AddProduct}/>
                    {/*register vanne link aayo vane Register component call gar.*/}
                </div>
            </div>
        )
    }
}
export default Container;