import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Operator extends React.Component {
  state = {
    operator: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:9090/api/getOperators")
      .then((res) => {
        console.log(res);
        this.setState({ operator: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (operatorId) => {
    axios
      .delete(`http://localhost:9090/api/removeOperator/${operatorId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const operator = this.state.operator.filter(
          (s) => s.operatorId != operatorId
        );
        this.setState({ operator: operator });
        alert(res.data.operatorId + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-100">
        <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-primary">
          <thead>
            <tr>
              <th>Operator Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Mobile</th>
              <th>Department Id</th>
              <th>Department Name</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.operator.map((s) => (
              <tr>
                <td>{s.operatorId}</td>
                <td>{s.firstName}</td>
                <td>{s.lastName}</td>
                <td>{s.email}</td>
                <td>{s.city}</td>
                <td>{s.mobile}</td>
                <td>{s.department.departmentId}</td>
                <td>{s.department.departmentName}</td>

                <td>
                  <Link
                    to={`/operator/update/${s.operatorId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.operatorId)}
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

export default Operator;
