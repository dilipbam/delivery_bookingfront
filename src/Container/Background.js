import { Component } from "react";
import OwnerSignup from "./OwnerSignup";
// import Image from "./public/truck.jpeg"

const styleDiv = {
    height: '240px',
    width: '100%',
    //background: 'grey',
    paddingRight: '9.3vw',
    paddingLeft: '9.3vw'
};

const styleTextDiv = {
    padding: '0 6.6vw', 
    height: '240px',
    width: '100%',
};

const style = {
    paddingTop: '44px',
    paddingBottom: '44px',
    marginBottom: '24px'
};

const stylePA = {
    margin: '0px',
    fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif' ,
    fontWeight: '400px',
    fontSize: '44px',
    lineHeight: '60px',
    letterSpacing: '-.03em'
};

const stylePB = {
    fontFamily: 'ff-clan-web-pro, Helvetica Neue, Helvetica, sans-serif ',
    //fontWeight: '200',
    fontSize: '44px',
    lineHeight: '60px',
    letterSpacing: '-.03em',
    margin: '0'
};

const backgroundImage = {
    backgroundImage: "./truck.jpeg",
    height: '495px',
    width: '100%',
};

class Background extends Component{
    render(){
        return(
            <div>
        <div  style={styleDiv}>
            <div style={styleTextDiv}>
                <div style={style}>
                    <p style={stylePA}>Get there</p>
                    <p style={stylePB}>Your day belongs to you</p>
                    <div>
                    <OwnerSignup/>
                    </div>        
                </div>
            </div>
        </div>
        <div style={backgroundImage}>
        </div>
    </div>
        )
    }
}
export default Background;