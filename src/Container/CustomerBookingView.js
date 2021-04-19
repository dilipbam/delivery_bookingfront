import {Component} from "react";
import axios from 'axios';

class CustomerBookingView extends Component{
    
        state={
            customerBooking:[],
        }
        componentDidMount(){
            axios.get("http://localhost:90/getBooking")
            .then((alldata)=>{
                console.log(alldata)

                this.state({
                    customerBooking:alldata.data.data
                })
            })        
            .catch((err)=>{
                console.log(err.response)}
            )
            }
        render(){
        return(
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <h3 className="text-center booking-form-title">Bookings!!</h3>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Vehicle Name</th>
                                    <th>Vehicle Number</th>
                                    <th>Driving License</th>
                                    <th>Driver Name</th>
                                    <th>Capacity</th>
                                    <th>Rate</th>
                                    <th>Type</th>
                                    <th>Pick Location</th>
                                    <th>Drop Location</th>
                                    <th>Phone</th>
                                    <th>Date</th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //loop launa .map
                                    this.state.customerBooking.map((customerBooking) => {
                                        return (
                                            <tr>
                                                <td>{customerBooking.UserName}</td>
                                                <td>{customerBooking.VehicleNumber}</td>
                                                <td>{customerBooking.DrivingLicense}</td>
                                                <td>{customerBooking.DivingName}</td>
                                                <td>{customerBooking.Capacity}</td>
                                                <td>{customerBooking.Rate}</td>
                                                <td>{customerBooking.Type}</td>
                                                <td>{customerBooking.PickLocation}</td>
                                                <td>{customerBooking.DropLocation}</td>
                                                <td>{customerBooking.Phone}</td>
                                                <td>{customerBooking.Date}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerBookingView;