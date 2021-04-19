import { Component } from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root:{
        maxWidth: 345,
    },
    media:{
        height:140
    },
});

class CustomerDashboard extends Component{
    
    render(){
        const classes = this.props
        return(
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media}
                    image="./public/truck.jpeg" title="truck"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" Component="h2">
                            Truck
                        </Typography>
                        <Typography variant="body2" color="textSecondary" Component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Book Truck</Button>
                    <Button size="small" color="primary">Contact Driver</Button>
                </CardActions>
            </Card>
        )
    }
}
export default CustomerDashboard;