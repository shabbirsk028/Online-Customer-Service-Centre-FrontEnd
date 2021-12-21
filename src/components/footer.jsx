import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";
import { Icon } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

class Footer extends React.Component {
    render() {

        return (


            <footer class="page-footer font-small stylish-color-dark pt-4">


                <div class="container text-center text-md-left">


                    <div class="row">


                        <div class="col-md-4 mx-auto">


                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Customer Service Center</h5>
                            <p>Online Customer Service Center is helping the <br/>
                            companies to deliver the best customer service by <br/>
                            our call centers. Being it's our core competency,<br/>
                             we made "Our Quality" like this, it is more than <br/>
                             just a promise/assurance of making our clients reach <br/>
                             the heights of success by rendering the best of customer service at all times.

</p>

                        </div>





                        <div class="col-md-2 mx-auto">


                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Inbound Services</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">About Us</a>
                                </li>
                                <li>
                                    <a href="#!">Phone/Call Answering Services</a>
                                </li>
                                <li>
                                    <a href="#!">Third Party Verification - Services</a>
                                </li>
                            </ul>

                        </div>





                        <div class="col-md-2 mx-auto">


                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Outbound Services</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Customer Satisfaction Surveys</a>
                                </li>
                                <li>
                                    <a href="#!">Cold Calling</a>
                                </li>
                                <li>
                                    <a href="#!">Careers</a>
                                </li>
                                <li>
                                    <a href="#!">Help Desk</a>
                                </li>
                                <li>
                                    <a href="#!">Customer Retention</a>
                                </li>
                            </ul>

                        </div>




                        <div class="col-md-2 mx-auto">


                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Get In Touch With Us</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a>ABC Call Center Pvt. Ltd.,
South End C Main Road,
Bangalore - 5600787</a>
                                </li>
                                <li>
                                    <CallIcon color="inherit" fontSize="small"/>
                                    <i class="fas fa-home"/>&nbsp;
                                    <a href="#!">+91 6874635849</a>
                                </li>
                                <li>
                                    <MailIcon color="inherit" fontSize="small"/>
                                    <i class="fas fa-home"/>&nbsp;
                                    <a href="#!">AB@gmail.com</a>
                                   
                                </li>
                               
                            </ul>

                        </div>


                    </div>


                </div>





                <ul class="list-unstyled list-inline text-center py-2">
                    <li class="list-inline-item">
                        <h5 class="mb-1">Register for free</h5>
                    </li>
                    <li class="list-inline-item">
                    <NavLink className="btn btn-danger btn-rounded" to="/regCustomer">
                        <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
                        </NavLink>
                    </li>
                </ul>




                
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                    < InstagramIcon color="secondary"/>
                    </li>
                    <li class="list-inline-item">
                       <TwitterIcon color="primary"/>
                    </li>
                    <li class="list-inline-item">
                     <GoogleIcon color="inherit"/>
                    </li>
                    <li class="list-inline-item">
                        <LinkedInIcon color="primary"/>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-dribbble mx-1">
                            <i class="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>



                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://customerservice.com/"> customerservice.com</a>
                </div>


            </footer>
        );
    }
}
export default Footer;