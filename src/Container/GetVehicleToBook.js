import React from 'react';
export default function GetVehicleToBook({ item, index }) {
    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <h3 className="text-center booking-form-title"></h3>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.N</th>
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
                          
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.UserName}</td>
                                            <td>{item.VehicleName}</td>
                                            <td>{item.VehicleNumber}</td>
                                            <td>{item.DrivingLicense}</td>
                                            <td>{item.DrivingName}</td>
                                            <td>{item.Capacity}</td>
                                            <td>{item.Rate}</td>
                                            <td>{item.Type}</td>
                                            <td>{item.PickLocation}</td>
                                            <td>{item.DeliverLocation}</td>
                                            <td>{item.Phone}</td>
                                            <td>{item.Date}</td>
                                        </tr>
                                
                            
                        
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}