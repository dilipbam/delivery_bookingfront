import { get } from "jquery";
import { Component } from "react";
import { Card, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

class BookingForm extends Component {
    state = {
        VehicleName : "",
        VehicleNumber : "",
        DrivingLicense : "",
        DriverName : "",
        Capacity : "",
        Rate : "",
        Type : "",
        PickLocation: "",
        DropLocation: "",
        Phone: "",
        Date: ""
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
            Type : this.state.Type,
            PickLocation : this.state.PickLocation,
            DropLocation : this.state.DropLocation,
            Phone : this.state.Phone,
            Data : this.state.Date
        }
        axios.post("http://localhost:90/getBooking", data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        });
    } 
    render() {
        return (
            // <!-- Page Content -->
            <div className="Container">

                <h3 className="text-center booking-form-title">Hurry Up and rent a  best Car!!</h3>

                <div className="row booking-form-row">
                    <div className="col-md-2"></div>

                    <div className="col-md-8">
                        <div className="card shadow mb-5 bg-white rounded booking">
                            {/* cardview for booking truck */}
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{get.VehicleName}</ListGroupItem>
                                    <ListGroupItem>{get.VehicleNumber}</ListGroupItem>
                                    <ListGroupItem>{get.DrivingLicense}</ListGroupItem>
                                    <ListGroupItem>{get.DriverName}</ListGroupItem>
                                    <ListGroupItem>{get.Capacity}</ListGroupItem>
                                    <ListGroupItem>{get.Rate}</ListGroupItem>
                                    <ListGroupItem>{get.Type}</ListGroupItem>
                                </ListGroup>                                
                            </Card>
                            <div className="login-form">
                                <form action="" method="post">
                                    <h4 className="modal-title">SignUp to create new Owner account</h4>
                                    <div className="form-group">
                                        <input type="text" name="pickUp" className="form-control" placeholder="Enter Goods PickUp Location" value={this.state.PickLocation} onChange={(event) => { this.setState({ PickLocation: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="dropLocation" className="form-control" placeholder="Enter Goods Delivery location" value={this.state.DropLocation} onChange={(event) => { this.setState({ DropLocation: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" className="form-control" placeholder="Enter your Phone no." value={this.state.Phone} onChange={(event) => { this.setState({ Phone: event.target.value }) }} />
                                    </div>
                                    <div className="form-group">
                                        <input type="date" name="date" className="form-control" placeholder="Choose date" value={this.state.Date} onChange={(event) => { this.setState({ Date: event.target.value }) }} />
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block btn-lg" value="SignUp" onClick={this.sendUserData} />
                                </form>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingForm;