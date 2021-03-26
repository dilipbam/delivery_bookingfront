import { Component } from "react";
import CustomerRegister from './CustomerRegister';
import OwnerRegister from './OwnerRegister';
import Login from './Login';
import {Route} from 'react-router-dom';
import AddProduct from "../Body/AddProduct";
import ProductUpdate from "./Update";
import Register from "./Register";

class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">This is test div.</div>
                    <Route path='/register' component={Register}/>
                    <Route path='/customerRegister' component={CustomerRegister}/>
                    <Route path='/ownerRegister' component={OwnerRegister}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/addproduct' component={AddProduct}/>
                    <Route path='/update' component={ProductUpdate}/>
                    
                    {/*register vanne link aayo vane Register component call gar.*/}
                </div>
            </div>
        )
    }
}
export default Container;