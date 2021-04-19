import { Component } from "react";
import axios from 'axios';

class OwnerSignup extends Component{
    state = {
        OwnerName : "",
        UserName : "",
        password : "",
        OwnerPhoto : "",
        Email : "",
        email : "",
        contact : "",
        DriverPhoto : "",
        VehicleNumber : "",
        LicenseNumber : "",
        Vehicle : "",
        VehicleType : "",
        VheiclePhoto : "",
        MaxTon : "",
        Rate : ""
    }
    sendUserData = (e) =>{
        e.preventDefault();
        const data={
            OwnerName : this.state.OwnerName,
            UserName : this.state.UserName,
            Password : this.state.Password,
            OwnerPhoto : this.state.OwnerPhoto,
            Email : this.state.Email,
            Contact : this.state.Contact,
            DriverPhoto : this.state.DriverPhoto,
            VehicleNumber : this.state.VehicleNumber,
            LicenseNumber : this.state.LicenseNumber,
            Vehicle : this.state.Vehicle,
            VehicleType : this.state.VehicleType,
            VehiclePhoto : this.state.VheiclePhoto,
            MaxTon : this.state.MaxTon,
            Rate : this.state.Rate
        }
        axios.post("http://localhost:90/ownerRegister", data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render(){
        return(
            <form>
                <h1>Register</h1>

                <div className="form-group">
                    <label>Owner Name</label>
                    <input type="text" name="ownerName" className="form-control" placeholder="First name" value={this.state.OwnerName} onChange={(event)=>{this.setState({OwnerName: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>username</label>
                    <input type="text" name="userName" className="form-control" placeholder="user name" value={this.state.UserName} onChange={(event)=>{this.setState({UserName: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.Password} onChange={(event)=>{this.setState({Password: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Owner Photo</label>
                    <input type="file" name="ownerPhoto" className="form-control" placeholder="Owner Photo" value={this.state.OwnerPhoto} onChange={(event)=>{this.setState({OwnerPhoto: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" value={this.state.Email} onChange={(event)=>{this.setState({Email: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="number" name="contact" className="form-control" placeholder="Enter Contact" value={this.state.Contact} onChange={(event)=>{this.setState({Contact: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>Driver Photo</label>
                    <input type="file" name="driverPhoto" className="form-control" placeholder="Driver Photo" value={this.state.DriverPhoto} onChange={(event)=>{this.setState({DriverPhoto: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>VehicleNumber</label>
                    <input type="text" name ="vehicleNumber" className="form-control" placeholder="Vechicle Number" value={this.state.VehicleNumber} onChange={(event)=>{this.setState({VehicleNumber: event.target.value})}} />
                </div>
                <div className="form-group">
                    <label>License Number</label>
                    <input type="text" name="licenseNumber" className="form-control" placeholder="License Number" value={this.state.LicenseNumber} onChange={(event)=>{this.setState({LicenseNumber: event.target.value})}} />
                </div>
                <div className="form-group">
                    <label>Vehicle</label>
                    <input type="text" name="vehicle" className="form-control" placeholder="Vehicle" value={this.state.Vehicle} onChange={(event)=>{this.setState({Vehicle: event.target.value})}} />
                </div>

                <div className="form-group">
                    <label>VehicleType</label>
                    <input type="text" name="vehicleType" className="form-control" placeholder="Enter Vehicle Type" value={this.state.VehicleType} onChange={(event)=>{this.setState({VehicleType: event.target.value})}} />
                </div>
                <div className="form-group">
                    <label>Vehicle Photo</label>
                    <input type="file" name="vehiclePhoto" className="form-control" placeholder="Vehicle Photo" value={this.state.VehiclePhoto} onChange={(event)=>{this.setState({VehiclePhoto: event.target.value})}} />
                </div>
                <div className="form-group">
                    <label>MaxTon</label>
                    <input type="text" name="maxTon" className="form-control" placeholder="Enter MaxTon" value={this.state.MaxTon} onChange={(event)=>{this.setState({MaxTon: event.target.value})}} />
                </div>
                <div className="form-group">
                    <label>Rate</label>
                    <input type="number" name="rate" className="form-control" placeholder="Enter Rate" value={this.state.Rate} onChange={(event)=>{this.setState({Rate: event.target.value})}} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./SignIn">log in?</a>
                </p>
            </form>
        )
    }
}
export default OwnerSignup;