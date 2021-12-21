import React, { Component } from "react";

import { connect } from "react-redux";
import { loginAction } from "../actions/loginaction";
import Joi from "joi-browser";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";

class Login extends React.Component {
  state = {
    login: {
      userId: "",
      username: "",
      password: "",
      role: "",
    },
    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    userId: Joi.string().min(3).max(20).required(),
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.login, this.schema, {
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
    const login = { ...this.state.login };
    login[event.target.name] = event.target.value;
    this.setState({ login: login });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    this.props.loginAction(this.state.login);

    // Redirect to products page on successfull login
    if (this.props.login) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Login Form</Typography>
        <Paper elevation={3}>
          <form onSubmit={this.handleSubmit} autoComplete="off" padding={2}>
            <TextField
              id="filled-basic"
              label="userId"
              variant="filled"
              type="number"
              style={{ marginBottom: 10 }}
              fullWidth
              value={this.state.userId}
              name="userId"
              onChange={this.handleChange}
              required
            />
            {errors && <small>{errors.userId}</small>}
            <TextField
              id="filled-basic"
              label="username"
              variant="filled"
              type="text"
              fullWidth
              style={{ marginBottom: 10 }}
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              required
            />
            {errors && <small>{errors.username}</small>}
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              required
            />
            {errors && <small>{errors.password}</small>}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);
