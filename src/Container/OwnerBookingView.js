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
              
                <label className ="">Owner Booking History</label>
            
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