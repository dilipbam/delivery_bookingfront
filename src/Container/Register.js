import { Component } from "react";
import axios from 'axios';
class Register extends Component{
    render(){
        return(
            <div id="tmm-form-wizard">
   
   <div class="rigistration_1_banner paddingSec2">
      <div class="container">
         <div class="row">
            <div class="col-
               md-5 col-sm-12 col-xs-12">
               <div class="row">
                  <h3>Registration</h3>
                  <p>Start using
                     BookaTruck services. Complete the registration.                 
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="clearfix"></div>
         
   <div class="rigistration_1_membership paddingSec2">
      <div class="container">
         <div class="row">
            <span class="member_1_no"><i class="fa fa-user" aria-hidden="true"></i></span>             
            <h3>Choose your account type</h3>
         </div>
      </div>
   </div>
   <div class="clearfix"></div>
        
   <div class="container rigis_1_mid_cont">
      <div class="row paddingSec mh-350-3imo">
         <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row">
               <div class="col-sm-6 col-md-4">
                  <a href="/CustomerRegister">
                     <div class="thumbnail">
                        <div class="caption regis_heading_top">
                           <span class="logimax_sprite logi_company"></span>
                           <h3>Register as Customer</h3>
                        </div>
                        
                     </div>
                  </a>
               </div>
               <div class="col-sm-6 col-md-4">
                  <a href="ownerRegister">
                     <div class="thumbnail">
                        <div class="caption regis_heading_top">
                           <span class="logimax_sprite logi_transport"></span>
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