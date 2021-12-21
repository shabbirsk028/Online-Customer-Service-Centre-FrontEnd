import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Customer extends React.Component {
  state = {
    customer: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:9090/api/getAllCustomers")
      .then((res) => {
        console.log(res);
        this.setState({ customer: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (customerId) => {
    axios
      .delete(`http://localhost:9090/api/removeCustomer/${customerId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const customer = this.state.customer.filter(
          (s) => s.customerId != customerId
        );
        this.setState({ customer: customer });
        alert(res.data.firstName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-primary">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Mobile Number</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customer.map((s) => (
              <tr style={{ color: "darkred", fontSize: "15px" }}>
                <td>{s.customerId}</td>
                <td>{s.firstName}</td>
                <td>{s.lastName}</td>
                <td>{s.email}</td>
                <td>{s.city}</td>
                <td>{s.mobile}</td>

                <td>
                  <Link to={`/updatecustomer`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.customerId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customer;
