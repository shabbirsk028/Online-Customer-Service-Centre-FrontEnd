import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Issue extends React.Component {
  state = {
    issues: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:9090/api/getallIssues/call")
      .then((res) => {
        console.log(res);
        this.setState({ issues: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (issueId) => {
    axios
      .delete(`http://localhost:9090/api/closeCustomerIssue/${issueId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const issues = this.state.issues.filter((s) => s.issueId != issueId);
        this.setState({ issues: issues });
        alert(res.data.issueId + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <Link
          to="/issue/addissue"
          className="btn btn-success mt-3 btn-md float-end mb-3"
        >
          Add Issue
        </Link>

        <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-primary">
          <thead>
            <tr>
              <th>Issue Id</th>
              <th>Description</th>
              <th>Issue Status</th>
              <th>Issue Type</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.issues.map((s) => (
              <tr>
                <td>{s.issueId}</td>
                <td>{s.description}</td>
                <td>{s.issueStatus}</td>
                <td>{s.issueType}</td>

                <td>
                  <Link to={`/issue/updateissue`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.issueId)}
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

export default Issue;
