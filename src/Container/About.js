import { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-map-react';

class About extends Component{
   /*  state={
        showingInfoWindow:false,
        activeMarker:{},
        selectedPlace:{}
    }
    onMarkerClick = (props, maker, e)=>
    this.setState({
        selectedPlace:props,
        activeMarker:marker,
        showingInfoWindow:true
    });

    onClose = props => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker:null
            });
        }
    }; */
render(){
    const mapStyles = {
        width: "100%",
        height: "10%" 
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
                                    {/* <Map
                                        title = "This is a unique title"
                                        width="100%"
                                        height="10%"
                                        frameborder ="0"
                                        google={this.props.google}
                                        zoom={15}
                                        style={{mapStyles}}
                                        initialCenter={
                                            {
                                                lat: 27.706087,
                                                lng: 85.3274373
                                            }
                                        }
                                    >
                                    <Marker onClick={this.onMarkerClick}
                                        name={'Car Rentals Company, Dillibazar, Kathmandu'} />
                                    <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}>
                                    <div>
                                        <h4>{this.state.selectedPlace.name}</h4>
                                    </div>
                                    </InfoWindow>
                                    </Map> */}
                                
                            </div>
                            <br />
                        </MDBCol>    
                    </MDBRow>
                    
                </section>

            </div>
    )};
}
export default/*  GoogleApiWrapper({
    apiKey:'AIzaSyCSLkd6ImcGFWFEmO2LKR2k4fsV51mn9sw'
}) */(About);