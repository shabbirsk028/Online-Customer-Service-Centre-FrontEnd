import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class AddOperator extends React.Component {
  state = {
    operator: {
      operatorId: "",
      city: "",
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",

      departmentId: "",
      departmentName: "",
    },

    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    departmentId: Joi.number().required(),
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),

    mobile: Joi.number().integer().min(6000000000).max(9999999999).required(),
    city: Joi.string().required(),
    operatorId: Joi.number().required(),
    departmentName: Joi.string().required(),
  };
  // Step 3: Validate operator input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.operator, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties

    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    // copy state operator object to local variable operator
    const operator = { ...this.state.operator };

    // update local operator object with values entered by user
    operator[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ operator: operator });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    const operator = {
      city: this.state.operator.city,
      department: {
        departmentId: this.state.operator.departmentId,
        departmentName: this.state.operator.departmentName,
      },
      email: this.state.operator.email,
      firstName: this.state.operator.firstName,
      lastName: this.state.operator.lastName,
      mobile: this.state.operator.mobile,
      operatorId: this.state.operator.operatorId,
    };
    axios
      .post("http://localhost:9090/api/addOperator", operator)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added operator " + this.state.operator.operatorId + " successfully!"
        );
        this.props.history.push("/operator");
      })
      .catch((err) => {
        console.log(err);

        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const {
      operatorId,
      email,
      departmentId,
      city,
      mobile,
      firstName,
      lastName,
      departmentName,
    } = this.state.operator;
    const { errors, errMsg } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="card-header bg-light text-black text-center">
            <h4 className="fw-bolder">Add Operator</h4>
          </div>
          <div className="mb-3">
            <label htmlFor="operatorId" className="form-label">
              Operator Id
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
            {errors && <small>{errors.operatorId}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              value={firstName}
              name="firstName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.firstName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              value={lastName}
              name="lastName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.lastName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              aria-describedby="emailHelp"
              value={mobile}
              name="mobile"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.mobile}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              aria-describedby="emailHelp"
              value={city}
              name="city"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.city}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="departmentId" className="form-label">
              Department Id
            </label>
            <input
              type="number"
              className="form-control"
              id="departmentId"
              value={departmentId}
              name="departmentId"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.departmentId}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="departmentName" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              className="form-control"
              id="departmentName"
              value={departmentName}
              name="departmentName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.departmentName}</small>}
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

export default AddOperator;
