import React, { Component } from "react";
import {connect}  from 'react-redux';
import сontactsOperations from '../../redux/contacts/contacts-operations'
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./ContactForm.module.css";
import сontactsSelectors from '../../redux/contacts/contacts-selectors'
import TextField from '@material-ui/core/TextField';


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const{name,number}= this.state;
    const isValidForm = this.validateForm(name, number);
    if (isValidForm) {
      this.props.onSubmit({ name, number });
    } else return;
    this.reset();
  };
  handleUniceContact = (name) => {
      const isContactThere = this.props.contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
      if (isContactThere) {
        toast.error('Contact is exist', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
          position: "top-right",
      })
        return;
      }
      return !isContactThere;
    };
  validateForm = (name, number) => {
    if (!name || !number) {
      toast.warn('Empty fields!!! Please fill',{
        autoClose:2000,
        hideProgressBar: true,
        pauseOnHover: false,
        position: "top-right",
      });
      return false;
    }
    return this.handleUniceContact(name);
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        <TextField className={s.FormInput}
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
        />

        <TextField className={s.FormInput}
          margin="normal"
          label="Number 345-67-89"
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          value={number}
          onChange={this.handleInputChange}
        />
        <Button margin='normal' type="submit" className={s.buttonForm} color='primary' variant='contained'>
          Add contact
          </Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: сontactsSelectors.AllContacts(state),
})


const mapDispatchToProps = dispatch =>({
  onSubmit: (item)=> dispatch(сontactsOperations.addItem(item))
})

 export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)