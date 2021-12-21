import React from "react";
import axios from "axios";
// import { Joi } from 'joi-browser';

class RegOperator extends React.Component {
  state = {
    operator: {
      operatorId: "",
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      mobile: "",

      departmentId: "",
      departmentName: "",
    },
    errors: {},
    errorMsg: "",
  };

  updateInput = (event) => {
    this.setState({
      operator: {
        ...this.state.operator,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit");

    const dataUrl = `http://localhost:9090/api/addOperator`;
    axios
      .post(dataUrl, this.state.operator)
      .then((response) => {
        console.log(response.data);
        alert(
          "Added Account " + this.state.operator.firstName + " successfully !!!"
        );
        this.props.history.push("/customer");
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMsg: error.response.data.message,
        });
      });
  };

  render() {
    const { operator } = this.state;
    const { errors, errorMsg } = this.state;
    console.log(this.state.operator);
    return (
      <section className="landing">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mx-auto">
                <div className="card mt-3">
                  <div className="card-header bg-warning text-black text-center">
                    <h4 className="fw-bolder">Register Customer</h4>
                  </div>
                  {errorMsg && (
                    <div className="alert alert-danger" role="alert">
                      {errorMsg}
                    </div>
                  )}
                  <form
                    className="shadow p-3 mt-1 bg-warning rounded text-center"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="mb-2">
                      <label
                        htmlFor="operatorId"
                        className="form-label fw-bold text-black"
                      >
                        Operator Id
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="operatorId"
                        name="operatorId"
                        value={operator.operatorId}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.operatorId}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="firstName"
                        className="form-label fw-bold text-black"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={operator.firstName}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.firstName}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="lastName"
                        className="form-label fw-bold text-black"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={operator.lastName}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.lastName}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="email"
                        className="form-label fw-bold text-black"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={operator.email}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.email}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="city"
                        className="form-label fw-bold text-black"
                      >
                        city
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={operator.city}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.city}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="mobile"
                        className="form-label fw-bold text-black"
                      >
                        mobile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={operator.mobile}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.mobile}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="departmentId"
                        className="form-label fw-bold text-black"
                      >
                        Department Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        // placeholder="account_name"
                        id="departmentId"
                        name="departmentId"
                        value={operator.departmentId}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.departmentId}</small>}
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="departmentName"
                        className="form-label fw-bold text-black"
                      >
                        Department Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="departmentName"
                        name="lastName"
                        value={operator.departmentName}
                        onChange={this.updateInput}
                      />
                      {errors && <small>{errors.departmentName}</small>}
                    </div>
                    <div className="d-grid gap-2 mt-2">
                      <button
                        type="submit"
                        className="btn btn-success btn-md text-black fw-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegOperator;
