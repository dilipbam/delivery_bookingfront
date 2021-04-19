import {Component, FormControl, RadioGroup, Radio, FormControlLabel, FormLabel} from "react";
import {Card, ListGroup, ListGroupItem} from 'reactstrap';

class SearchVehicle extends Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-form">

                        <form action="" method="post">
                            <FormControl component="fieldset">
                                    <FormLabel component="legend">
                                        Gender &nbsp;
                                    </FormLabel>
                                    <RadioGroup aria-label="vehicleType" name="vehilceType" value={this.value} onChange={this.handleChange} row name="VehicleType">
                                        <FormControlLabel value="6 Wheeler" control={<Radio />} label="Female" />
                                        <FormControlLabel value="10 Wheeler" control={<Radio />} label="Male" />
                                        <FormControlLabel value="12 Wheeler" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                </form>
                                <input type="submit" className="btn btn-primary btn-block" value="Search for Truck" onClick={this.book} />
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
                                
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>  
        </div>
        )
    }
}

export default SearchVehicle;