import React from 'react'
import styles from './AppBar.module.css'
import LinkElement from '../LinkElement'
import routes from '../../routes'
import selectors from '../../redux/auth/register-selections';
import operations from '../../redux/auth/register-operations';
import { ImExit } from "react-icons/im";
import { connect } from 'react-redux'
import defaultAvatar from './avatar-2.png'

// console.log(selectors.getIsAuthenticated);

function NavRegisterLogin () {
    return (
        <ul className={styles.NavList}>
            <li className={styles.ListItem}>
            <LinkElement link={routes.registration} styleName='Registration'/>
            </li>
            <li className={styles.ListItem}>
            <LinkElement link={routes.login} styleName='Login'/>  
            </li>
        </ul>
    )
}

function UserMenu ({avatar, email, onLogOut }) {
    return (
        <div>
            <img src={avatar} alt="avatar" width="34"/>
            <span>{email}</span>
           <button type="button" onClick={onLogOut} ><ImExit/></button>
        </div>
    )
}

function AppBar({IsAuthenticated, email, avatar, onLogOut }) {
    return (
        <header className={styles.header}>
            {IsAuthenticated ? <UserMenu email={email} avatar={avatar} onLogOut={onLogOut}/>: <NavRegisterLogin/>}
            {/* <LinkElement link={routes.phoneBook}  styleName='contacts'/> */}
        </header>
    )
}

const mapStateToProps = state => ({
    IsAuthenticated: selectors.getIsAuthenticated(state),
    email: selectors.getEmailUser(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogOut: operations.logout
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
