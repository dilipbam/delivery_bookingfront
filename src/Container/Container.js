import { Component } from "react";
import CustomerRegister from './CustomerRegister';
import OwnerRegister from './OwnerRegister';
import Login from './Login';
import {Route} from 'react-router-dom';
import Register from "./Register";
import Logout from "./Logout";
import CustomerSignup from "./CustomerSignup";
import OwnerSignup from "./OwnerSignup";
import OwnerBookingView from "./OwnerBookingView";
import About from "./About";
import Homepage from "./Homepage";
import CoustomerDashboard from "./CustomerDashboard";
import CustomerProfile from "./CustomerProfile";
import AddVehicle from "./AddVehicle";
import SearchVehicle from "./SearchVehicle";

class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">                    
                    <Route path='/home' component={Homepage}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/customerRegister' component={CustomerRegister}/>
                    <Route path='/ownerRegister' component={OwnerRegister}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/logout' component={Logout}/>  
                    <Route path='/searchVehicle' component={SearchVehicle}/>
                    <Route path='/customerProfile' component={CustomerProfile}/>
                    <Route path='/CustomerSignup' component={CustomerSignup}/>
                    <Route path='/OwnerSignup' component={OwnerSignup}/>
                    <Route path='/ownerBooking' component={OwnerBookingView}/>
                    <Route path='/customerDashboard' component={CoustomerDashboard}/>
                    <Route path='/About' component={About}/>
                    <Route path='/addVehicle' component={AddVehicle}/>
                    {/*register vanne link aayo vane Register component call gar.*/}
                </div>
            </div>
        )
    }
}
export default Container;