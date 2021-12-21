import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import Issue from "./components/issue";
import UpdateIssue from "./components/updateissue";
import AddIssue from "./components/addissue";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import {Route,Switch} from "react-router-dom";
import * as React from 'react';
import Customer from "./components/customer";
import RegCustomer from "./components/regcustomer";
import Operator from "./components/operator";
import RegOperator from "./components/regoperator";
import UpdateCustomer from "./components/updatecustomer";
import AddOperator from "./components/addoperator";
import UpdateOperator from "./components/updateoperator";
import Dashboard from "./components/dashboard";
import OperatorDashboard from "./components/operatordashboard";
import Call from "./components/call";
import AddCall from "./components/addcall";
import UpdateCall from "./components/updatecall";
import AboutUs from "./components/aboutus";
import CustomerDashboard from "./components/customerdashboard";


function App() {
  return (
    <div style={{backgroundImage:'url("./assets/img.jpg")',backgroundSize:'cover',height:'650px'}}>
     <Nav />
     
      <Switch>
    
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/issue/addissue" component={AddIssue}/>
        <Route path="/issue/updateissue" component={UpdateIssue}/>
        <Route path="/issue" component={Issue}/>
        
        
        <Route path="/regcustomer" component={RegCustomer}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/updatecustomer" component={UpdateCustomer}/>
        <Route path="/operator/update/:operatorId" component={UpdateOperator}/>
        <Route path="/addoperator" component={AddOperator}/>
        <Route path="/regoperator" component={RegOperator}/>
        <Route path="/operator" component={Operator}/>
        <Route path="/call/addcall" component={AddCall} />
        <Route path="/call/update/:callId" component={UpdateCall} />
        <Route path="/call" component={Call} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/operatordashboard" component={OperatorDashboard}/>
        <Route path="/customerdashboard" component={CustomerDashboard}/>
        <Route component={PageNotFound}/>
      </Switch>  
     
    </div>
  );
}
export default App;