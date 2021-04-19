import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    state = {
        cars: [],
        carBrand: ''
    }

    //displays data beforehand any events (clicking any button)

    componentDidMount() {
        axios.get("http://localhost:90/car/all")
            .then((alldata) => {
                console.log(alldata)

                this.setState({
                    cars: alldata.data.data
                })

            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    getBrand = (id) => {
        axios.get("http://localhost:90/car/all/" + id)
            .then((response) => {
                // console.log(response)
                this.setState({
                    cars: response.data.data
                })

                console.log(this.state.cars)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div className="container-fluid">

                {/* page content */}
                <div className="container">

                    <div className="row text-center">
                        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="gallery-title">Car Hire</h1>
                        </div>

                        <div className="col-lg-12 col-md-12 text-center">
                            <button className="btn btnBrand active" onClick={this.getBrand.bind(this, "")} style={{ border: "1px solid #05445E", borderRadius: "5px", margin: "0px 5px 20px 5px" }}> All</button>
                            <button className="btn btnBrand" onClick={this.getBrand.bind(this, "BMW")} style={{ border: "1px solid #05445E", borderRadius: "5px", margin: "0px 5px 20px 5px" }}> BMW</button>
                            <button className="btn btnBrand" onClick={this.getBrand.bind(this, "Audi")} style={{ border: "1px solid #05445E", borderRadius: "5px", margin: "0px 5px 20px 5px" }}> Audi</button>
                            <button className="btn btnBrand" onClick={this.getBrand.bind(this, "Maruti")} style={{ border: "1px solid #05445E", borderRadius: "5px", margin: "0px 5px 20px 5px" }}> Maruti</button>
                            <br />
                        </div>
                    </div>


                    {/* <h2>Our Brands</h2>
                    <div class="row text-center">
                        <div class="col-lg-2 col-sm-4 mb-4">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                        </div>
                        <div class="col-lg-2 col-sm-4 mb-4">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                        </div>
                        <div class="col-lg-2 col-sm-4 mb-4">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                        </div>
                        <div class="col-lg-2 col-sm-4 mb-4">
                            <img class="img-fluid" src="http://placehold.it/500x300" alt="" />
                        </div>
                    </div> */}

                    <div class="row">
                        {
                            this.state.cars.map((car) => {
                                return (
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="card h-55">
                                            <img className="card-img-top" src={"http://localhost:90/" + car.photo} alt="" />
                                            <div className="card-body" style={{background:"#EAEAE0"}}>
                                                <h4 class="card-title">{car.model}</h4>

                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <p><i className="fa fa-user" aria-hidden="true">: 4</i></p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p><i className="fa fa-snowflake-o" aria-hidden="true"></i></p>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <p><i className="fa fa-money" aria-hidden="true">: $24.99/day</i></p>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img class="rounded-circle" src={"http://localhost:90/" + car.photo} alt="driver" width="40" height="40" />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <p>Meezu Lawot</p>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <p><i className="fa fa-phone" aria-hidden="true">: 0987654321</i></p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="card-footer">
                                                <Link to={'/viewCarDetails/'+ car._id} class="btn btn-secondary btnBook" style={{background:"#1a1d20"}}>Book Now</Link>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
           
        )
        }
    }

export default Homepage;