import axios from 'axios';
import { data } from 'jquery';
import { React, useEffect, useState } from 'react';
import GetOwnerBooking from './GetOwnerBooking';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeartbeat, faBookOpen, faEdit, faTrash, faTicketAlt } from '@fortawesome/fontawesome-free/free-solid-svg-icons';

export default function GetOwnerBookings() {
    const [bookingDetails, setBookingHistory] = useState([]);


useEffect(() => {
    axios.get("http://localhost:90/getBookings")
        .then((response => {
            console.log('response', response);
            setBookingHistory(response.data.bookingDetails);
        }));
}, []);

return (
    <div>
        {
            console.log("GetOwnerBooking", bookingDetails)
        }
        <div className="BookingHistory">
            <span className="font-bold ml-800x fs-20">
              
                <label className ="fs-20">Owner Booking History</label>
            
            </span>
            {
                bookingDetails.length > 0 &&
                (bookingDetails || []).map((item, index) => (
                    <div key={index}>
                
                        <GetOwnerBooking item ={item} index = {index} />
                    </div>
                ))
            }
        </div>
        {
            bookingDetails.length == 0 &&
            <span className="ml-750x fs-30">No Booking History</span>
        }
    </div>
)
}
















/* import {Component, useEffect} from "react";
import axios from 'axios';
import setData from 'react';

class OwnerBookingView extends Component{

        state={
            ownerBooking:[],
        }
        componentDidMount(){
            axios.get("http://localhost:90/getBookings")
            .then((alldata)=>{
                console.log("alldata", alldata)

                this.state({
                    ownerBooking:alldata.data.bookingDetais
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

                                    (this.state.ownerBooking || []).map((ownerBooking) => {

                                        return (
                                            <tr>
                                                <td>{ownerBooking.UserName}</td>
                                                <td>{ownerBooking.VehicleName}</td>
                                                <td>{ownerBooking.VehicleNumber}</td>
                                                <td>{ownerBooking.DrivingLicense}</td>
                                                <td>{ownerBooking.DrivingName}</td>
                                                <td>{ownerBooking.Capacity}</td>
                                                <td>{ownerBooking.Rate}</td>
                                                <td>{ownerBooking.Type}</td>
                                                <td>{ownerBooking.PickLocation}</td>
                                                <td>{ownerBooking.DeliverLocation}</td>
                                                <td>{ownerBooking.Phone}</td>
                                                <td>{ownerBooking.Date}</td>
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

export default OwnerBookingView; */