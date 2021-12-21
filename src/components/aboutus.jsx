import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import image10 from "../images/image10.jpg";
import image20 from "../images/image20.jpg";
import image40 from "../images/image40.jpg";
import image60 from "../images/image60.jpg";
import Footer from "./footer";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="row row-custom-padding section-inex-1">
        <div class="card " style={{ width: "17rem", margin: "20px" }}>
          <img src={image10} class="card-img-top" width="200px" alt="..." />

          <div class="card-body">
            <p class="card-text">
              Our mission is to surpass at
              <br />
              being the best support to our <br />
              customers by understanding <br />
              their requirement. Providing <br />
              high level intuition to make <br />
              them excel in their business
              <br />
              performance.
            </p>

            {/* <a href="#" class="btn btn-primary"> */}
          </div>
        </div>

        <div class="card " style={{ width: "17rem", margin: "20px" }}>
          <img src={image20} class="card-img-top" alt="..." />

          <div class="card-body">
            <p class="card-text">
              Our vision is to provide the
              <br />
              best experience for our valuable clients in the call
              <br />
              centre industry, By making <br />
              them get the maximum satisfaction through <br />
              meeting their expectations. <br />
            </p>

            {/* <a href="#" class="btn btn-primary"> */}
          </div>
        </div>

        <div class="card " style={{ width: "17rem", margin: "20px" }}>
          <img src={image40} class="card-img-top" alt="..." />

          <div class="card-body">
            <p class="card-text">
              Our quality is more <br />
              than just a promise/assurance
              <br />
              of making our clients reach
              <br />
              the heights of success by <br />
              rendering the best of customer service at all times.
              <br />
            </p>
          </div>
        </div>
        <div class="card " style={{ width: "17rem", margin: "20px" }}>
          <img src={image60} class="card-img-top" alt="..." />

          <div class="card-body">
            <p class="card-text">
              Our Quality Assuring Officers will be dedicatedly serving
              <br />
              you with all the goodwill. Our <br />
              Advanced Call Barging
              <br />
              and Monitoring Services
              <br />
              will enable us to have the track of the process.
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
