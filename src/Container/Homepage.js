import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

class Homepage extends Component {
    
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid purple" id="homeJumbo">
                    <div className="container">
                        <div className="row vertical-align-middle mt-5 mb-5">
                            <div className="col-md-6">
                                <h1 className="text-inverse">You can hire the available Trucks in order to pickup and drop your valuable goods from one place to another in cheap price and fast delivery.</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-4">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: "1px solid #dfe3e8;" }}>
                </div>
                <div className="container full-page mt-5" id="resources">
                    <div className="text-center mb-5">
                        <h2>Benefits of using the application</h2>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./truck.jpeg" alt="cardImg" />
                                <div className="card-body">
                                    <h4 className="card-title">Book Your Truck</h4>
                                    <p className="card-text">With the help of the Transportation, you can gain boost in your Business.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./cargo1.jpg" alt="cardImg" />
                                <div className="card-body">
                                    <h4 className="card-title">International Transport</h4>
                                    <p className="card-text">We guarantee you will find the perfect Load for your truck.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top" src="./booking.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">Booking</h4>
                                    <p className="card-text">With the help of our applicatio, expect clearcut communication with your hired accountants</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="./sea.jpg"></img>
                            </div>
                            <div className="col-md-6">
                                <h2>About us</h2>
                                <p>Excellent Business Plans’ team of start-up and business professionals will e
            xpertly guide you through the process of facilitating growth, meeting your business goals and taking your start-up dreams and making them a reality. Our goal is to improve your business performance.</p>
                                <Link to='/about'> 
                                <Button className="submitBtn" variant="contained" color="primary">Learn more</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;