import { Component } from "react";
import {connect}  from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import styles from '../App.module.css';
import ContactsList from "../components/ContactsList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import LogoPhoneBook from '../components/LogoPhoneBook';
import Container from '../components/UI/Container';
import actionsOperations from '../redux/contacts/contacts-operations'
import actionsSelectors from '../redux/contacts/contacts-selectors'
import AppBar from '../components/AppBar'







class PhoneBookPage extends Component {

 componentDidMount(){
   this.props.getItemsList();
 }  


  render() {
    const {contacts} = this.props;
    return (
      <>
          <>
           <AppBar/>
            <Container>
                <LogoPhoneBook text="PhoneBook"/>
                <ContactForm/>
            </Container>
            <Container>
                <CSSTransition in={contacts.length > 1} 
                  timeout={250} 
                  classNames={styles}
                   unmountOnExit>
                   <div className={styles.SearchForm}>
                   <Filter/>
                  </div>
                </CSSTransition>
              <ContactsList contacts={contacts} />
            </Container>
           </>
         <ToastContainer position="top-left" autoClose={2000} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: actionsSelectors.AllContacts(state),
  // loading: actionsSelectors.isLoading(state)
})
const mapDispatchToProps = dispatch => ({
  getItemsList: ()=> dispatch(actionsOperations.getItemsList())
})

export default connect(mapStateToProps,mapDispatchToProps)(PhoneBookPage);
