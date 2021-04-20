import axios from 'axios';
import { data } from 'jquery';
import { React, useEffect, useState } from 'react';
import GetVehicleToBook from './GetVehicleToBook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeartbeat, faBookOpen, faEdit, faTrash, faTicketAlt } from '@fortawesome/fontawesome-free/free-solid-svg-icons';

export default function GetVehicleToBooks() {
    const [vehicleDetails, setVehicleDetails] = useState([]);


useEffect(() => {
    axios.get("http://localhost:90/getVehicle")
        .then((response => {
            console.log('response', response);
            setVehicleDetails(response.data.vehicleDetails);
        }));
}, []);

return (
    <div>
        {
            console.log("GetVehicleToBook", vehicleDetails)
        }
        <div className="GetVehicle">
            <span className="font-bold ml-800x fs-20">
              
                <label className ="">Owner Booking History</label>
            
            </span>
            {
                vehicleDetails.length > 0 &&
                (vehicleDetails || []).map((item, index) => (
                    <div key={index}>
                
                        <GetVehicleToBook item ={item} index = {index} />
                    </div>
                ))
            }
        </div>
        {
            vehicleDetails.length == 0 &&
            <span className="ml-750x fs-30">No Booking History</span>
        }
    </div>
)
}