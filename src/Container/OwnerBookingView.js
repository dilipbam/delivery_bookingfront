import {Component} from "react";
import axios from 'axios';

class OwnerBookingView extends Component{
    
        state={
            ownerBookings:[],
        }
        componentDidMount(){
            axios.get("http://localhost:90/getBookings")
            .then((alldata)=>{
                console.log(alldata)

                this.state({
                    ownerBookings:alldata.data.data
                })
            })        
            .catch((err)=>{
                console.log(err.response)}
            )
        }
        deleteBooking = (id) => {
            axios.delete("http://localhost:90/booking/delete/" + id)
                .then((response) => {
                    console.log(response)
                    this.componentDidMount()
                })
                .catch((err) => {
                    console.log(err.response)
                })
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
                                    this.state.ownerBookings.map((ownerBookings) => {
                                        return (
                                            <tr>
                                                <td>{ownerBookings.UserName}</td>
                                                <td>{ownerBookings.VehicleNumber}</td>
                                                <td>{ownerBookings.DrivingLicense}</td>
                                                <td>{ownerBookings.DivingName}</td>
                                                <td>{ownerBookings.Capacity}</td>
                                                <td>{ownerBookings.Rate}</td>
                                                <td>{ownerBookings.Type}</td>
                                                <td>{ownerBookings.PickLocation}</td>
                                                <td>{ownerBookings.DropLocation}</td>
                                                <td>{ownerBookings.Phone}</td>
                                                <td>{ownerBookings.Date}</td>
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

export default OwnerBookingView;