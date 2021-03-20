import LoginForm from '../components/LoginForm';
// import LinkElement from '../components/LinkElement'
// import routes from '../routes'
import Container from '../UI/Container'
import AppBar from '../components/AppBar'






export default function LoginPage() {
    return (
        <Container>
            <AppBar/>
            <h1>Login form</h1>
            <p>Please login</p>
            <LoginForm/>
            {/* <LinkElement link={routes.registration} styleName='Registration'/> */}
        </Container>
    )
}



