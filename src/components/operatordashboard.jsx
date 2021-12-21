import React, { Component } from "react";

import axios from "axios";

import { Link } from "react-router-dom";



class OperatorDashboard extends React.Component {

    state = {

        login: [],

        call: [],

        issue: [],

    };



    // class component life cycle methods

    componentDidMount() {

        console.log("componentDidMount");

        axios

            .post("http://localhost:9090/api/login")

            .then((res) => {

                console.log(res);

                this.setState({ login: res.data });

                console.log(res.data);

            })

            .catch((err) => console.log(err));

    }



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



    render() {

        return (

            <div className="d-grid gap-10 d-md-block" id="leftcol" id="tagcloud">

                <span className="mytags">





                    <Link className="btn btn-primary mr-5" to="/issue">View Issues</Link>


                </span>
                <i class="fas fa-home" />&nbsp;
                <i class="fas fa-home" />&nbsp;
                <Link

                    to="/call/addcall"

                    className="btn btn-success  mr-1">

                    Add Call

                </Link>


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

                            <th> Actions</th>



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

                                        className="btn btn-primary">

                                        Update

                                    </Link>



                                    <button

                                        className="btn btn-danger"

                                        onClick={() => this.handleDelete(c.callId)}>

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



export default OperatorDashboard;