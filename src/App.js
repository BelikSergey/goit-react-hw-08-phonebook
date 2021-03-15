import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect}  from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import styles from './App.module.css';
// import ContactsList from "./components/ContactsList";
// import ContactForm from "./components/ContactForm";
// import Filter from "./components/Filter";
// import LogoPhoneBook from './components/LogoPhoneBook';
// import Container from './UI/Container/Container';
// import actionsOperations from './redux/contacts/contacts-operations'
import actionsSelectors from './redux/contacts/contacts-selectors'
// import LinkElement from './com;
import routes from './routes';
import MainPage from './views/MainPage'



const PhoneBookPage =lazy(()=>
import('./views/PhoneBookPage' /* webpackChunkName: "phone-book-page" */),
);
const LoginPage =lazy(()=>
import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegistrationPage =lazy(()=>
import('./views/RegistrationPage' /* webpackChunkName: "registration-page" */),
);


const App =() => {

//  componentDidMount(){
//    this.props.getItemsList();
//  }  


 
    // const {loading,contacts} = this.props;
    return (
      <>
      <Suspense
          fallback={
            <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={200}
            width={200}
            />
          }
      >
          <Switch>
              <Route path={routes.main} exact component={MainPage} />
              <Route path={routes.login} component={LoginPage}/>
              <Route path={routes.phoneBook} component={PhoneBookPage}/>
              <Route
                  path={routes.registration}
                  component={RegistrationPage}
              />
              <Redirect to="/" />
          </Switch>
      </Suspense>
      <ToastContainer position="top-left" autoClose={2000} />
    </>



      // <>
      //     {loading === true && (
      //       <Loader
      //       type="ThreeDots"
      //       color="#00BFFF"
      //       height={80}
      //       width={80}
      //       />
      //     ) }
      //     {loading === false && (
      //      <>
      //       <Container>
      //           <LinkElement link={routes.registration} styleName='Registration'/>
      //           <LinkElement link={routes.login} styleName='Login'/>
      //           <LogoPhoneBook/>
      //           <ContactForm/>
      //       </Container>
      //       <Container>
      //           <CSSTransition in={contacts.length > 1} 
      //             timeout={250} 
      //             classNames={styles}
      //              unmountOnExit>
      //              <div className={styles.SearchForm}>
      //              <p>Find contacts by name</p>
      //              <Filter/>
      //             </div>
      //           </CSSTransition>
      //         <ContactsList contacts={contacts} />
      //       </Container>
      //      </>
      //     )}
      //    <ToastContainer position="top-left" autoClose={2000} />
      // </>
    );
  }


const mapStateToProps = (state) => ({
  contacts: actionsSelectors.AllContacts(state),
  loading: actionsSelectors.isLoading(state)
})
// const mapDispatchToProps = dispatch => ({
//   getItemsList: ()=> dispatch(actionsOperations.getItemsList())
// })

export default connect(mapStateToProps, null)(App);
// export default connect()(App)