import { Component, useState, useEffect } from "react";
import axios from 'axios';
import { FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from 'react';
import { data, event } from "jquery";

export default function AddVehicle() {
    const [VehicleName, setVehicleName] = useState("")
    const [VehicleNumber, setVehicleNumber] = useState("")
    const [DrivingLicense, setDrivingLicense] = useState("")
    const [DrivingName, setDrivingName] = useState("")
    const [Capacity, setCapacity] = useState("")
    const [Rate, setRate] = useState("")
    const [Type, setType] = useState("")

    const data = {

        VehicleName : VehicleName,
        VehicleNumber : VehicleNumber,
        DrivingLicense : DrivingLicense,
        DrivingName : DrivingName,
        Capacity : Capacity,
        Rate : Rate,
        Type :Type
    }

   const sendUserData = () => {

        axios.post("http://localhost:90/AddVehicle", data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
    };

    

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-form">

                        <form >
                            <h4 className="modal-title">add your vehicle details here.</h4>
                            <div className="form-group">
                                <input type="text" name="VehicleName" className="form-control" placeholder="Enter Vehicle name" value={VehicleName} onChange={(event) => {return(setVehicleName(event.target.value)) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="VehicleNumber" className="form-control" placeholder="Enter Vehicle Number" value={VehicleNumber} onChange={(event) => {return(setVehicleNumber(event.target.value)) }}/>
                            </div>
                            <div><p>Select your Vehicle type</p></div>
                            <div className="radio-buttons">
                                6 Wheeler
                                <input
                                    id="type"
                                    value={Type}
                                    name="Type"
                                    type="radio"
                                    onChange={(event)=> {return setType(event.target.value)}}
                                />
                                10 Wheeler<input id="type" value={Type} name="Type" type="radio" onChange={(event)=> {return setType(event.target.value)}} />
                                12 Wheeler<input id="type" value={Type} name="Type" type="radio" onChange={(event)=> {return setType(event.target.value)}}/>
                            </div>                            
                            <div className="form-group">
                                <input type="text" name="DrivingLicense" className="form-control" placeholder="Enter Driving License" value={DrivingLicense} onChange={(event) => {return(setDrivingLicense(event.target.value)) }}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="DrivingName" className="form-control" placeholder="Enter driver name" value={DrivingName} onChange={(event) => {return(setDrivingName(event.target.value)) }}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Capacity" className="form-control" placeholder="Enter your Capacity" value={Capacity} onChange={(event) => {return(setCapacity(event.target.value)) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="Rate" className="form-control" placeholder="Enter Rate" value={Rate} onChange={(event) => {return(setRate(event.target.value)) }} />
                            </div>
                            <div>
                                <input type="submit" className="btn btn-primary btn-block btn-lg" value="Add Truck" onClick={sendUserData} />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}