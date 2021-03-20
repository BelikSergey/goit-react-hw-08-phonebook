// import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import registerSelectors from '../../redux/auth/register-selections'


const PrivetRout = ({
    component: Component,
    isAuthenticated,
    ...routeProps
}) => (
    <Route {...routeProps}
    render={props => 
        isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/> }/>
);
 
const mapStateToProps= (state)=>({
    isAuthenticated: registerSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(PrivetRout)