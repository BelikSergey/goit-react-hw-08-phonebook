import React from 'react'
import styles from './AppBar.module.css'
import LinkElement from '../LinkElement'
import routes from '../../routes'


function AppBar() {
    return (
        <header className={styles.header}>
            <ul className={styles.NavList}>
                <li className={styles.ListItem}>
                <LinkElement link={routes.registration} styleName='Registration'/>
                </li>
                <li className={styles.ListItem}>
                <LinkElement link={routes.login} styleName='Login'/>  
                </li>
            </ul>
        </header>
    )
}


export default AppBar
