import { Component } from "react";
import axios from 'axios';
class OwnerRegister extends Component{
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
            <div>
                <h1>Register</h1>
                <form>
                    <p> Owner Name <input type="text" name="ownerName" value={this.state.OwnerName} onChange={(event)=>{this.setState({OwnerName: event.target.value})}}/></p>
                    <p> User Name <input type="text" name="userName" value={this.state.UserName} onChange={(event)=>{this.setState({UserName: event.target.value})}}/></p>
                    <p> Password <input type="password" name="password" value={this.state.Password} onChange={(event)=>{this.setState({Password: event.target.value})}}/></p>
                    <p> Owner Photo <input type="file" name="ownerPhoto" value={this.state.OwnerPhoto} onChange={(event)=>{this.setState({OwnerPhoto: event.target.value})}}/></p>
                    <p> Email <input type="password" name="email" value={this.state.Email} onChange={(event)=>{this.setState({Email: event.target.value})}}/></p>
                    <p> Contact <input type="text" name="contact" value={this.state.Contact} onChange={(event)=>{this.setState({Contact: event.target.value})}}/></p>
                    <p> DriverPhoto <input type="file" name="driverPhoto" value={this.state.DriverPhoto} onChange={(event)=>{this.setState({DriverPhoto: event.target.value})}}/></p>
                    <p> VehicleNumber <input type="text" name="vehicleNumber" value={this.state.VehicleNumber} onChange={(event)=>{this.setState({VehicleNumber: event.target.value})}}/></p>
                    <p> LicenseNumber <input type="text" name="licenseNumber" value={this.state.LicenseNumber} onChange={(event)=>{this.setState({LicenseNumber: event.target.value})}}/></p>
                    <p> Vehicle <input type="text" name="vehicle" value={this.state.Vehicle} onChange={(event)=>{this.setState({Vehicle: event.target.value})}}/></p>
                    <p> VehicleType <input type="text" name="vehicleType" value={this.state.VehicleType} onChange={(event)=>{this.setState({VehicleType: event.target.value})}}/></p>
                    <p> VehiclePhoto <input type="file" name="vehiclePhoto" value={this.state.VehiclePhoto} onChange={(event)=>{this.setState({VehiclePhoto: event.target.value})}}/></p>
                    <p> MaxTon <input type="text" name="maxTon" value={this.state.MaxTon} onChange={(event)=>{this.setState({MaxTon: event.target.value})}}/></p>
                    <p> Rate <input type="text" name="rate" value={this.state.Rate} onChange={(event)=>{this.setState({Rate: event.target.value})}}/></p>
                    <p> <button onClick={this.sendUserData}>Submit</button></p>
                </form>
            </div>
        )
    }
}
export default OwnerRegister;