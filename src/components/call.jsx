import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Call extends React.Component {
  state = {
    call: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:9090/api/getCalls")
      .then((res) => {
        console.log(res);
        this.setState({ call: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (callId) => {
    axios
      .delete(`http://localhost:9090/api/removeCall/${callId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const call = this.state.call.filter((c) => c.callId != callId);
        this.setState({ call: call });
        alert(res.data.callDate + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-primary">
          <thead>
            <tr>
              <th>Call Id</th>
              <th>Call Date</th>
              <th>Call Duration</th>
              <th>Phone Number</th>
              <th>Customer Id</th>
              <th>Issue Id</th>
              <th>Operator Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.call.map((c) => (
              <tr key={c.callId}>
                <td>{c.callId}</td>
                <td>{c.callDate}</td>
                <td>{c.callDuration}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.customer.customerId}</td>
                <td>{c.issue.issueId}</td>
                <td>{c.receivedBy.operatorId}</td>

                <td>
                  <Link
                    to={`/call/update/${c.callId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(c.callId)}
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

export default Call;
