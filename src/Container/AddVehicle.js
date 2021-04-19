import { Component } from "react";
import axios from 'axios';

class AddVehicle extends Component{
    state = {
        VehicleName : VehicleName,
        VehicleNumber : VehicleNumber,
        DrivingLicense : DrivingLicense,
        DriverName : DriverName,
        Capacity : Capacity,
        Rate : Rate,
        Type : Type
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data={
            VehicleName : this.state.VehicleName,
            VehicleNumber : this.state.VehicleNumber,
            DrivingLicense : this.state.DrivingLicense,
            DriverName : this.state.DriverName,
            Capacity : this.state.Capacity,
            Rate : this.state.Rate,
            Type : this.state.Type
        }
        axios.post("http://localhost:90/addVehicle", data)
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

                        <form action="" method="post">
                            <h4 className="modal-title">SignUp to create new Owner account</h4>
                            <div className="form-group">
                            <input type="text" name="vehicleName" className="form-control" placeholder="Enter Vehicle name" value={this.state.VehicleName} onChange={(event)=>{this.setState({VehicleName: event.target.value})}} />
                            </div>
                            <div className="form-group">
                            <input type="text" name="vehicleNumber" className="form-control" placeholder="Enter Vehicle Number" value={this.state.VehicleNumber} onChange={(event)=>{this.setState({VehicleNumber: event.target.value})}} />
                            </div>
                            <div className="form-group">
                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.ItemText>Select Vehicle Type</Dropdown.ItemText>
                                <Dropdown.Item as="button">6 Wheeler Truck</Dropdown.Item>
                                <Dropdown.Item as="button">10 Wheeler Truck</Dropdown.Item>
                                <Dropdown.Item as="button">12 Wheeler Truck</Dropdown.Item>
                            </DropdownButton>
                            <div className="form-group">
                                <input type="text" name="driverName" className="form-control" placeholder="Enter driver name" required="required" value={this.state.DriverName} onChange={(event) => { this.setState({DriverName: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="contact" className="form-control" placeholder="Enter your contact no." required="required" value={this.state.Contact} onChange={(event) => { this.setState({Contact: event.target.value }) }} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="rate" className="form-control" placeholder="Enter Rate" required="required" value={this.state.Rate} onChange={(event) => { this.setState({Rate: event.target.value }) }} />
                            </div>
                            <input type="submit" className="btn btn-primary btn-block btn-lg" value="SignUp" onClick={this.sendUserData} />
                            </div>
                        </form>
                        
                        <div className="text-center small">Already have an account? <a href="/login">Login</a></div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>  
        )
    }
}

export default AddVehicle;