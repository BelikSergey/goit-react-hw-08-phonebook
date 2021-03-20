import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import registerSelectors from '../../redux/auth/register-selections'


const PrublicRout = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route {...routeProps}
    render={props => 
        isAuthenticated 
        && routeProps.restricted 
        ?  <Redirect to={redirectTo}/> 
        : <Component {...props}/> }/>
);
 
const mapStateToProps= (state)=>({
    isAuthenticated: registerSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(PrublicRout)