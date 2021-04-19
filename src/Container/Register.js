import { Component } from "react";
// import axios from 'axios';
class Register extends Component{
    render(){
        return(
            <div id="tmm-form-wizard">
   
   <div className="rigistration_1_banner paddingSec2">
      <div className="container">
         <div className="row">
            <div className="col-
               md-5 col-sm-12 col-xs-12">
               <div className="row">
                  <h3>Registration</h3>
                  <p>Start using
                     BookaTruck services. Complete the registration.                 
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="clearfix"></div>
         
   <div className="rigistration_1_membership paddingSec2">
      <div className="container">
         <div className="row">
            <span className="member_1_no"><i className="fa fa-user" aria-hidden="true"></i></span>             
            <h3>Choose your account type</h3>
         </div>
      </div>
   </div>
   <div className="clearfix"></div>
        
   <div className="container rigis_1_mid_cont">
      <div className="row paddingSec mh-350-3imo">
         <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row">
               <div className="col-sm-6 col-md-4">
                  <a href="/CustomerSignup">
                     <div className="thumbnail">
                        <div className="caption regis_heading_top">
                           <span className="logimax_sprite logi_company"></span>
                           <h3>Register as Customer</h3>
                        </div>                        
                     </div>
                  </a>
               </div>
               <div className="col-sm-6 col-md-4">
                  <a href="/OwnerSignup">
                     <div className="thumbnail">
                        <div className="caption regis_heading_top">
                           <span className="logimax_sprite logi_transport"></span>
                           <h3>Register as Owner</h3>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        )
    }
}
export default Register;