import { Component } from "react";
import {BrowserRouter, Router, Link} from 'react-router-dom';
import CustomerRegister from './CustomerRegister';
import OwnerRegister from './OwnerRegister';
import CustomerLogin from './CustomerLogin';
import {Route} from 'react-router-dom';
import Register from "./Register";
import Logout from "./Logout";
import CustomerSignup from "./CustomerSignup";
import OwnerSignup from "./OwnerSignup";
import OwnerBookingView from "./OwnerBookingView";
import About from "./About";
import Homepage from "./Homepage";
import CustomerBookingView from "./CustomerBookingView";
import CustomerProfile from "./CustomerProfile";
import AddVehicle from "./AddVehicle";
import SearchVehicle from "./SearchVehicle";
import BookingForm from "./BookingForm";
import { Form } from "reactstrap";
import OwnerLogin from "./OwnerLogin";

class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">                    
                    <Route path='/home' component={Homepage}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/customerRegister' component={CustomerRegister}/>
                    <Route path='/ownerRegister' component={OwnerRegister}/>
                    <Route path='/customerLogin' component={CustomerLogin}/>
                    <Route path='/ownerLogin' component={OwnerLogin}/>
                    <Route path='/logout' component={Logout}/>  
                    <Route path='/searchVehicle' component={SearchVehicle}/>
                    <Route path='/customerProfile' component={CustomerProfile}/>
                    <Route path='/CustomerSignup' component={CustomerSignup}/>
                    <Route path='/OwnerSignup' component={OwnerSignup}/>
                    <Route path='/ownerBooking' component={OwnerBookingView}/>
                    <Route path='/CustomerBookingView' component={CustomerBookingView}/>
                    <Route path='/About' component={About}/>
                    <Route path='/addVehicle' component={AddVehicle}/>
                    <Route path='/bookingForm' component={BookingForm}/>
                    {/*register vanne link aayo vane Register component call gar.*/}
                </div>
            </div>
        )
    }
}
export default Container;