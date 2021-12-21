import axios from "axios";
import React, { Component } from "react";
//import Joi from "joi-browser";

class UpdateOperator extends React.Component {
  state = {
    operator: {
      operatorId: "",
      city: "",
      email: "",
      firstName:"",
      lastName:"",
      mobile: "",
      departmentId: "",
      departmentName:"",
    },
    errors: {},
    errMsg: "",
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
   
    const operator=
    {
        
        "city":this.state.operator.city ,
        "department":{
          "departmentId": this.state.operator.departmentId,
          "departmentName":this.state.operator.departmentName ,
        },
        "email":this.state.operator.email ,
        "firstName":this.state.operator.firstName ,
        "lastName":this.state.operator.lastName ,
        "mobile": this.state.operator.mobile,
        "operatorId":this.state.operator.operatorId ,
    }
    axios
      .put("http://localhost:9090/api/modifyOperator", operator)
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated Operator operator " + this.state.operator.operatorId + " successfully!"
        );
        this.props.history.push("/operator");
      })
      .catch((err) => 
        console.log(err));
      }
  render() {
    // Object Destructuring
    const { operatorId, email,departmentId, city, mobile,firstName,lastName,departmentName } = this.state.operator;
    const { errors, errMsg } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
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
            <label htmlFor="firstName" className="form-label">
              FirstName
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
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              LastName
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
           
          </div>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
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
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputdepartmentId1" className="form-label">
              DepartmentId
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputdepartmentId1"
              value={departmentId}
              name="departmentId"
              onChange={this.handleChange}
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputdepartmentname" className="form-label">
              DepartmentName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputdepartmentId1"
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

export default UpdateOperator;