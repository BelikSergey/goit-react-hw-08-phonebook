import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../ContactForm/ContactForm.module.css'
import registerOperations from '../../redux/auth/register-operations'

class RegisterForm extends Component {
         
    state = {
        name: "",
        email: "",
        password:"",
      };

      handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
      handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log('есть сабмит формы');
        const{name, email, password }= this.state;

        if(name !== '' && email!=='' && password!==''){
          this.props.onRegister(this.state);
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
            name: "",
            email: "",
            password:"",
        });
      };


    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmitForm}>
                    <p>Name</p>
                    <input className={styles.FormInput}
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.handleInputChange}
                    />
                    <p>email</p>
                    <input className={styles.FormInput}
                      type="email"
                      name="email"
                      placeholder="bla-bla-bla@mail.com"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    <p>password</p>
                    <input className={styles.FormInput}
                      type="password"
                      name="password"
                      placeholder="******"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                    <button className={styles.buttonForm} type="submit">
                      Register
                    </button>
                </form>
                
            </div>
        )
    }
};

const mapDispatchToProps ={
  onRegister: registerOperations.register,
}


export default connect(null,mapDispatchToProps )(RegisterForm)  