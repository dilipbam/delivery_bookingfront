import { Component } from "react";
import axios from 'axios';
import {FormControl, Radio, FormLabel, RadioGroup, FormControlLabel} from 'react';

class AddVehicle extends Component{  
    state = {
        VehicleName : "",
        VehicleNumber : "",
        DrivingLicense : "",
        DrivingName : "",
        Capacity : "",
        Rate : "",
        Type : ""
    }    
    sendUserData = (e) =>{
        e.preventDefault();
        const data={
            VehicleName : this.state.VehicleName,
            VehicleNumber : this.state.VehicleNumber,
            DrivingLicense : this.state.DrivingLicense,
            DrivingName : this.state.DrivingName,
            Capacity : this.state.Capacity,
            Rate : this.state.Rate,
            Type : this.state.Type
        }
        axios.post("http://localhost:90/AddVehicle", data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    } 
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-form">

                        <form >
                            <h4 className="modal-title">add your vehicle details here.</h4>
                            <div className="form-group">
                            <input type="text" name="VehicleName" className="form-control" placeholder="Enter Vehicle name" value={this.state.VehicleName} onChange={(event)=>{this.setState({VehicleName: event.target.value})}} />
                            </div>
                            <div className="form-group">
                            <input type="text" name="VehicleNumber" className="form-control" placeholder="Enter Vehicle Number" value={this.state.VehicleNumber} onChange={(event)=>{this.setState({VehicleNumber: event.target.value})}} />
                            </div>
                            <div><p>Select your Vehicle type</p></div>
                            {/* <div className="radio-buttons">
                                6 Wheeler
                                <input
                                    id="type"
                                    value="6 Wheeler"
                                    name="Type"
                                    type="radio"
                                    onChange={this.state.Type}
                                />
                                10 Wheeler<input id="type" value="10 Wheeler" name="Type" type="radio" onChange={this.state.Type}/>
                                12 Wheeler<input id="type" value="12 Wheeler" name="Type" type="radio" onChange={this.state.Type}/>
                            </div> */}
                            {/* <FormControl component="fieldset">
                                    <FormLabel component="legend">
                                        Gender &nbsp;
                                    </FormLabel>
                                    <RadioGroup aria-label="VehicleType" name="VehilceType" value={this.value} onChange={this.handleChange} row name="VehicleType">
                                        <FormControlLabel value="6 Wheeler" control={<Radio />} label="Female" />
                                        <FormControlLabel value="10 Wheeler" control={<Radio />} label="Male" />
                                        <FormControlLabel value="12 Wheeler" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl> */}
                                <div className="form-group">
                                <input type="text" name="DrivingLicense" className="form-control" placeholder="Enter Driving License"  value={this.state.DrivingLicense} onChange={(event) => { this.setState({DrivingLicense: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="DrivingName" className="form-control" placeholder="Enter driver name"  value={this.state.DrivingName} onChange={(event) => { this.setState({DrivingName: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="Capacity" className="form-control" placeholder="Enter your Capacity"  value={this.state.Capacity} onChange={(event) => { this.setState({Capacity: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="Rate" className="form-control" placeholder="Enter Rate" value={this.state.Rate} onChange={(event) => { this.setState({Rate: event.target.value }) }} />
                            </div>
                            <div>
                            <input type="submit" className="btn btn-primary btn-block btn-lg" value="Add Truck" onClick={this.sendUserData} />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>  
        )
    }
}

export default AddVehicle;