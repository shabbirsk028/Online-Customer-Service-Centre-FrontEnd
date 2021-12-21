import React from 'react';
import axios from 'axios';
// import { Joi } from 'joi-browser';

class UpdateIssue extends React.Component {
    state = {
        issue: {
            issueId: "",
            description: "",
            issueStatus: "",
            issueType:"",
            
        },
        errors: {},
        errorMsg: "",
    };


    updateInput = (event) => {
        this.setState({
            issue: {
                ...this.state.issue,
                [event.target.name]: event.target.value,
            },
        });
        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

       

        // sending request
        const dataUrl = `http://localhost:9090/api/modifyCustomerIssue`;
        axios
            .put(dataUrl, this.state.issue)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Updated Issue " +
                        this.state.issue.issueId +
                        " successfully !!!"
                );
                this.props.history.push("/issue");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { issue } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.issue);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-warning text-black text-center">
                                        <h4 className="fw-bolder">
                                              Update Issue
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-warning rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="issueId"
                                                className="form-label fw-bold text-black"
                                            >
                                               IssueId
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                               
                                                id="issueId"
                                                name="issueId"
                                                value={issue.issueId}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.issueId}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="description"
                                                className="form-label fw-bold text-black"
                                            >
                                               Description
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                             
                                                id="description"
                                                name="description"
                                                value={issue.description}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.description}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="issueStatus"
                                                className="form-label fw-bold text-black"
                                            >
                                               IssueStatus
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                id="issueStatus"
                                                name="issueStatus"
                                                value={issue.issueStatus}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.issueStatus}</small>
                                            )}
                                            </div>
                                            <div className="mb-2">
                                            <label
                                                htmlFor="issueType"
                                                className="form-label fw-bold text-black"
                                            >
                                                IssueType
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                
                                                id="issueType"
                                                name="issueType"
                                                value={issue.issueType}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.issueType}
                                                </small>
                                            )}
                                        
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
 
export default UpdateIssue;