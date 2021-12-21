import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image30 from "../images/image30.jpg";
import image50 from "../images/image50.jpg";
import { height } from "@mui/system";

class Dashboard extends React.Component {
  state = {
    login: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .post("http://localhost:9090/api/login")
      .then((res) => {
        console.log(res);
        this.setState({ login: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div class="row row-custom-padding section-inex-1">
        <div
          class="card "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "50%",
          }}
        >
          <img
            src={image30}
            class="card cardalign w-50"
            width="200px"
            alt="..."
          />

          <div class="card-body">
            <p class="card-text">
              operator is primarily in charge of handling inbound and <br />
              outbound calls in a call center being there best support to <br />
              customers by understanding their requirement.
              <br />
            </p>

            

            <Link to="/operatordashboard" className="btn btn-primary">
              operator
            </Link>
          </div>
        </div>

        <div
          class="card "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "60%",
          }}
        >
          <img src={image50} class="card cardalign w-50" alt="..." />

          <div class="card-body">
            <p class="card-text">
              customer support teams successfully assist customers with 
              questions
              <br />
              or problems, then those customers are likely to
              <br />
              happy and do business again with the organization.
              <br />
            </p>

            <Link to="/customerdashboard" className="btn btn-primary">
              customer
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
