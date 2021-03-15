// import PropTypes from 'prop-types'
// import LinkElement from '../components/LinkElement';
// import routes from '../routes';
import styles from './MainPage.module.css';
import AppBar from '../components/AppBar';
import Container from '../UI/Container'
import LogoPhoneBook from '../components/LogoPhoneBook'

// import 

function MainPage() {
    return (
        <Container>
        <AppBar/>
        <div className={styles.MainPage}>
            <h1 className={styles.Title}>Welcome to <LogoPhoneBook/></h1>
            <h2>If you want to continue, Please LogIn or Register</h2>
            {/* <LinkElement link={routes.registration} styleName='Registration'/>
            <LinkElement link={routes.login} styleName='Login'/> */}
        </div>
        </Container>
    )
}


export default MainPage

