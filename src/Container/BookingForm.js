import {Component} from "react";
import {Card, ListGroup, ListGroupItem} from 'reactstrap';

class BookingForm extends Component{
    render(){
        return(
            //cardview for booking truck
            
             // <!-- Page Content -->
             <div className="Container">

             <h3 className="text-center booking-form-title">Hurry Up and rent a  best Car!!</h3>

             <div className="row booking-form-row">
                 <div className="col-md-2"></div>

                 <div className="col-md-8">
                     <div className="card shadow mb-5 bg-white rounded booking">
                     <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Book this Truck</Card.Link>
                                    </Card.Body>
                                </Card>
                         <div className="card-body booking-form">
                             <div className="row mt-4">
                                 <div className="col-sm-6">
                                     <span>PickUp Location</span>
                                     <input type="text" name="pickUpLocation" className="form-control" placeholder="PickUp Location"
                                         required="required" value={this.state.pickUpLocation} onChange={this.changeHandler}/>
                                 </div>
                                 <div className="col-sm-6">
                                     <span>Return Location</span>
                                     <input type="text" name="returnLocation" className="form-control" placeholder="Return Location"
                                         required="required" value={this.state.returnLocation} onChange={this.changeHandler}/>
                                 </div>
                                 {/* <input type="submit" className="btn btn-primary" value="Set location" /> */}
                             </div>

                             <div className="row mt-4">

                                 <div className="col-sm-6">
                                     <span>PickUp Date</span>
                                     <div className="input-icons">
                                         <i className="fa fa-calendar icon"></i>
                                         <input name="pickUpDate" className="input-field text-center form-control" type="date" 
                                         id="daterange" size="35" value={this.state.pickUpDate} onChange={this.changeHandler}/>
                                     </div>
                                 </div>

                                 <div className="col-sm-6">
                                     <span>Return Date</span>
                                     <div className="input-icons">
                                         <i className="fa fa-calendar icon"></i>
                                         <input name="returnDate" className="input-field text-center form-control" type="date" 
                                         id="daterange" size="35" value={this.state.returnDate} onChange={this.changeHandler}/>
                                     </div>
                                 </div>
                             </div>

                             <div className="row mt-4">
                                 <div className="col-sm-6">
                                 <span>PickUp Time</span> 
                                 <select name="pickUpTime" className="browser-default custom-select mb-4" id="select" value={this.state.pickUpTime} onChange={this.changeHandler}>
                                     <option  disabled="" selected="">6:00 AM</option>
                                     <option >7:00 AM</option>
                                     <option >8:00 AM</option>
                                     <option >9:00 AM</option>
                                     <option >10:00 AM</option>
                                     <option >11:00 AM</option>
                                     <option >12:00 AM</option>
                                 </select></div>
                                 
                                 <div className="col-sm-6">
                                 <span>Return Time</span> 
                                 <select name="returnTime" className="browser-default custom-select mb-4" id="select" value={this.state.returnTime} onChange={this.changeHandler}>
                                     <option disabled="" selected="">6:00 AM</option>
                                     <option >7:00 AM</option>
                                     <option >8:00 AM</option>
                                     <option >9:00 AM</option>
                                     <option >10:00 AM</option>
                                     <option >11:00 AM</option>
                                     <option >12:00 AM</option>
                                 </select></div>
                             </div>
                             <input type="submit" className="btn btn-primary btn-block" value="Book Now" onClick={this.book} />
                         </div>
                     </div>
                 </div>
             </div>
         </div>            
        )
    }
}

export default BookingForm;