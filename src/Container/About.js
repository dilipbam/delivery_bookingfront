import { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {Map, Marker, InfoWindow} from 'google-map-react';

class About extends Component{
render(){
    const mystyle = {
        fontSize: "58px", 
        textTransform: "none",
        letterSpacing: "0px"
      };
    return(
        <div className="container">

                <h3 className="text-center booking-form-title">About Us</h3>
                <section className="my-5">
                    <MDBRow>
                        <MDBCol lg="5" className="lg-0 mb-4">
                            <p className="text-justify">
                            Our company, Car Rentals, specialises in the supply of quality vehicle rental for private and commercial use. 
                            We have an expansive selection of cars for hire including
                             fully comprehensive insurance and the optional convenience of vehicle delivery and collection.short-wheelbase-transit-van-hire.
                             We work with an extensive network of reliable suppliers which enables us to offer the very best rental 
                             services and pricing. We offer a delivery and collection service that is the ultimate in convenience.
                              Our customers are businesses, fleet managers, couriers, delivery drivers, families, holidaymakers and 
                              individuals who need to get from A to B with the minimum of fuss, maximum choice.
                            </p>
                        </MDBCol>
                        <MDBCol lg="7">
                            <div
                                id="map-container"
                                className="rounded z-depth-1-half map-container"
                                style={{ height: "200px" }}>
                                
                            </div>
                            <br />
                        </MDBCol>    
                    </MDBRow>
                    
                </section>

            </div>
    )};
}
export default About;