import axios from "axios";
import React, { Component } from "react";

class AddCall extends React.Component {
  state = {
    call: {
      callId: "",
      callDate: "",
      callDuration: "",
      phoneNumber: "",

      customerId: "",
      city: "",
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",

      issueId: "",
      description: "",
      issueStatus: "",
      issueType: "",

      departmentId: "",
      departmentName: "",

      operatorId: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
    },
    errors: {},
    errMsg: "",
  };
  handleChange = (event) => {
    // copy state operator object to local variable operator
    const call = { ...this.state.call };

    // update local operator object with values entered by user
    call[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ call: call });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    const call = {
      callDate: this.state.call.callDate,
      callDuration: this.state.call.callDuration,
      callId: this.state.call.callId,
      customer: {
        city: this.state.call.city,
        customerId: this.state.call.customerId,
        email: this.state.call.customerEmail,
        firstName: this.state.call.customerFirstName,
        lastName: this.state.call.customerLastName,
        mobile: this.state.call.customerMobile,
      },
      issue: {
        description: this.state.call.description,
        issueId: this.state.call.issueId,
        issueStatus: this.state.call.issueStatus,
        issueType: this.state.call.issueType,
      },
      phoneNumber: this.state.call.phoneNumber,
      receivedBy: {
        city: this.state.call.city,
        department: {
          departmentId: this.state.call.departmentId,
          departmentName: this.state.call.departmentName,
        },
        email: this.state.call.operatorEmail,
        firstName: this.state.call.operatorFirstName,
        lastName: this.state.call.operatorLastName,
        mobile: this.state.call.operatorMobile,
        operatorId: this.state.call.operatorId,
      },
    };
    axios
      .post("http://localhost:9090/api/addCall", call)
      .then((res) => {
        console.log(res.data);
        alert("Added call " + this.state.call.callId + " successfully!");
        this.props.history.push("/call");
      })
      .catch((err) => console.log(err));
  };

  render() {
    // Object Destructuring
    const {
      callId,
      callDate,
      callDuration,
      phoneNumber,
      customerId,
      customerFirstName,
      customerLastName,
      customerMobile,
      customerEmail,
      operatorId,
      operatorFirstName,
      operatorLastName,
      operatorMobile,
      operatorEmail,
      issueId,
      description,
      issueStatus,
      issueType,
      departmentId,
      departmentName,
    } = this.state.call;
    const { errors, errMsg } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="card-header bg-light text-black text-center">
            <h4 className="fw-bolder">Add Call</h4>
          </div>
          <div className="mb-3">
            <label htmlFor="callId" className="form-label">
              CallId
            </label>
            <input
              type="number"
              className="form-control"
              id="callId"
              aria-describedby="emailHelp"
              value={callId}
              name="callId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="callDate" className="form-label">
              CallDate
            </label>
            <input
              type="number"
              className="form-control"
              id="callDate"
              aria-describedby="emailHelp"
              value={callDate}
              name="callDate"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="callDuration" className="form-label">
              CallDuration
            </label>
            <input
              type="number"
              className="form-control"
              id="callDuration"
              aria-describedby="emailHelp"
              value={callDuration}
              name="callDuration"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              PhoneNumber
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              aria-describedby="emailHelp"
              value={phoneNumber}
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerId" className="form-label">
              CustomerId
            </label>
            <input
              type="number"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
              value={customerId}
              name="customerId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerFirstName" className="form-label">
              CustomerFirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="customerFirstName"
              aria-describedby="emailHelp"
              value={customerFirstName}
              name="customerFirstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerLastName" className="form-label">
              CustomerLastName
            </label>
            <input
              type="text"
              className="form-control"
              id="customerLastName"
              aria-describedby="emailHelp"
              value={customerLastName}
              name="customerLastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerMobile" className="form-label">
              CustomerMobile
            </label>
            <input
              type="number"
              className="form-control"
              id="customerMobile"
              aria-describedby="emailHelp"
              value={customerMobile}
              name="customerMobile"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerEmail" className="form-label">
              CustomerEmail
            </label>
            <input
              type="number"
              className="form-control"
              id="customerEmail"
              aria-describedby="emailHelp"
              value={customerEmail}
              name="customerEmail"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorId" className="form-label">
              OperatorId
            </label>
            <input
              type="number"
              className="form-control"
              id="operatorId"
              aria-describedby="emailHelp"
              value={operatorId}
              name="operatorId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorFirstName" className="form-label">
              OperatorFirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="operatorFirstName"
              aria-describedby="emailHelp"
              value={operatorFirstName}
              name="operatorFirstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorLastName" className="form-label">
              OpeartorLastName
            </label>
            <input
              type="text"
              className="form-control"
              id="operatorLastName"
              aria-describedby="emailHelp"
              value={operatorLastName}
              name="operatorLastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorMobile" className="form-label">
              OperatorMobile
            </label>
            <input
              type="number"
              className="form-control"
              id="operatorMobile"
              aria-describedby="emailHelp"
              value={operatorMobile}
              name="operatorMobile"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="operatorEmail" className="form-label">
              OperatorEmail
            </label>
            <input
              type="number"
              className="form-control"
              id="operatorEmail"
              aria-describedby="emailHelp"
              value={operatorEmail}
              name="operatorEmail"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="issueId" className="form-label">
              Issue Id
            </label>
            <input
              type="number"
              className="form-control"
              id="issueId"
              aria-describedby="emailHelp"
              value={issueId}
              name="issueId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="number"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="issueStatus" className="form-label">
              Issue Status
            </label>
            <input
              type="number"
              className="form-control"
              id="issueStatus"
              aria-describedby="emailHelp"
              value={issueStatus}
              name="issueStatus"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="issueType" className="form-label">
              Issue Type
            </label>
            <input
              type="number"
              className="form-control"
              id="issueType"
              aria-describedby="emailHelp"
              value={issueType}
              name="issueType"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departmentId" className="form-label">
              Department Id
            </label>
            <input
              type="number"
              className="form-control"
              id="departmentId"
              aria-describedby="emailHelp"
              value={departmentId}
              name="departmentId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departmentName" className="form-label">
              Department Name
            </label>
            <input
              type="number"
              className="form-control"
              id="departmentName"
              aria-describedby="emailHelp"
              value={departmentName}
              name="departmentName"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCall;
