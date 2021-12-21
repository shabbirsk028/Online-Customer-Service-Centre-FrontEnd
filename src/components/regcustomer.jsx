import axios from "axios";
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField, Box, MenuItem, Paper, Button } from "@mui/material";
import Joi from "joi-browser";

class RegCustomer extends React.Component {
    state = {
        customer: {
            customerId: "",
            city: "",
            email: "",
            firstName: "",
            lastName: "",
            mobile: "",

        },


        errors: {},
        errMsg: "",
    };

    // define schema to validate input field values
    schema = {

        firstName: Joi.string().min(3).max(20).required(),
        lastName: Joi.string().min(3).max(20).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),

        mobile: Joi.number()
            .integer()
            .min(6000000000)
            .max(9999999999)
            .required(),
        city: Joi.string().required(),
        customerId: Joi.number().required(),


    };
    // Step 3: Validate user input with schema
    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.customer, this.schema, {
            abortEarly: false,
        });
        console.log(result);
       
        if (result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };
    handleChange = (event) => {

        // copy state customer object to local variable operator
        const customer = { ...this.state.customer };

        // update local customer object with values entered by user
        customer[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({ customer: customer });
    };
    updateInput = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            },
        });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;

        axios
            .post("http://localhost:9090/api/regCustomer", this.state.customer)
            .then((res) => {
                console.log(res.data);
                alert(
                    "Added customer " + this.state.customer.customerId + " successfully!"
                );
                this.props.history.push("/customer");
            })
            .catch((err) => {
                console.log(err);

                console.log(err.response.data.message);
                this.setState({ errMsg: err.response.data.message });
            });
    };

    render() {
        // Object Destructuring
        const { customerId, email, city, mobile, firstName, lastName } = this.state.customer;
        const { errors, errMsg } = this.state;
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="w-25 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
                >
                    <div className="card-header bg-secondary text-black text-center">
                        <h4 className="fw-bolder">
                            Register Customer
                        </h4>
                 
                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="customerId" className="form-label">
                            customerId
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="customerId"
                            aria-describedby="emailHelp"
                            value={customerId}
                            name="customerId"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.customerId}</small>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            FirstName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="firstName"
                            aria-describedby="emailHelp"
                            value={firstName}
                            name="firstName"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.firstName}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            LastName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="lastName"
                            aria-describedby="emailHelp"
                            value={lastName}
                            name="lastName"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.lastName}</small>}

                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
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
                            placeholder="mobile"
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
                            placeholder="city"
                            aria-describedby="emailHelp"
                            value={city}
                            name="city"
                            onChange={this.handleChange}
                        />
                        {errors && <small>{errors.city}</small>}

                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                  
                    <div className="">
                        <p>Already have an account?<Link to="/login">Sign in</Link></p>
                        
                    </div>
                    
                    
                    
                </form>
              
            </div>
        );
    }
}

export default RegCustomer;