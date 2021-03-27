import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../ContactForm/ContactForm.module.css'
import registerOperations from '../../redux/auth/register-operations'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
    state = {
       email: "",
       password:"",
      };

      handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
      handleSubmitForm = (e) => {
        e.preventDefault();
        const{ email, password}= this.state;

        if(email!=='' && password !== '' ){
            this.props.onLogin(this.state)
        } else {
            toast.error('Empty fields!!! Please fill oll the fields', {
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                position: "top-right",
        })}
        this.reset();
      };
      reset = () => {
        this.setState({
          email: "",
          password:"",
        });
      };


    render() {
        const { email, password} = this.state;
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmitForm}>
                    <TextField 
                      label="email" 
                      className={styles.FormInput}
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    <TextField className={styles.FormInput}
                      margin="normal"
                      label="password" 
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                   
                    <Button color='primary' variant='contained' className={styles.buttonForm} type="submit">
                      Login
                    </Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
  onLogin: registerOperations.login,
} 

export default connect(null, mapDispatchToProps)(LoginForm)