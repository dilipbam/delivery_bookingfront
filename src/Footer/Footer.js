import { Component } from "react";

class Footer extends Component{
    render(){
        return(
  //           <footer class="py-5 bg-dark">
  //   <div class="container">
  //     <p class="m-0 text-center text-white">Copyright &copy; DeliveryTruckBooking 2021</p>
  //   </div>
  // </footer>
  <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About Truckers Nepal</span> 
      Truckers Nepal is a company which deals with booking of trucks online. Needy people can book trucks according their needs. 
      We provide various types of trucks available in Nepal. We Provide services like Light , Medium and Heavy Trucks.
    </p>
    <div className="icons">
      <a href="https://www.facebook.com/"><img src="/facebook.png" /></a>
      <a href="https://www.twitter.com/"><img src="/twitter.png" /></a>
      <a href="https://www.linkedin.com/"><img src="/linkedin.png" /></a>
      <a href="http://www.plus.google.com/"><img src="/google.png" /></a>
      <a href="https://www.instagram.com/"><img src="/instagram.png" /></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Sankhamul- 10</span> Kathmandu, Nepal</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+977) 01-4445568</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> truckersnepal2021@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <a href="./"><h2><span><img src="/TruckersNepal.png" className="footer-logo"/></span></h2></a>
    <p className="menu">
      <a href="./"> Home</a> |
      <a href="./about"> About</a> |
      <a href="./services"> Services</a> |
      <a href="./portfolio"> Portfolio</a> |
      <a href="./news"> News</a> |
      <a href="./contact"> Contact</a>
    </p>
    <p className="name"> Truckers Nepal &copy; 2021</p>
  </div>
</footer>
        )
    }
}
export default Footer;