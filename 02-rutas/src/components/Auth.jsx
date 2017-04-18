import React, { Component, PropTypes } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Switch
} from 'react-router-dom'

const AuthSite = () => (
	<Router>
		<div>
			<AuthButton />
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/public">Página Pública</Link></li>
				<li><Link to="/protected">Página Protegida</Link></li>
			</ul>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/public" component={Public} />
				<PrivateRoute path="/protected" component={Protected} />
				<Route path="/login" component={Login} />
			</Switch>
		</div>
	</Router>
)

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const AuthButton = withRouter(( {history} ) => (
	( fakeAuth.isAuthenticated )
	?
		<div>
			<h2>¡Bienvenid@! :)</h2>
			<button onClick={() => fakeAuth.signout( () => history.push('/') )}>Salir</button>
		</div>
	: 
		<h2>¡NO, estás Logueado! :(</h2>
))

const PrivateRoute = ( {component: Component, rest} ) => (
	<Route {...rest} render={(props) => (
		fakeAuth.isAuthenticated
			//? React.createElement(component, props)
			? <Component {...props} />
			: <Redirect to={ {pathname: '/login', state: {from: props.location}} } />
	)} />
)

const Home = () => <h3>Home</h3>
const Public = () => <h3>Contenido Público</h3>
const Protected = () => <h3>Contenido Protegido</h3>

class Login extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			redirectRoute: false
		}

		this.login = this.login.bind(this)
	}

	login() {
		fakeAuth.authenticate( () => this.setState({ redirectRoute: true }) )
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		const { redirectRoute } = this.state
		
		if ( redirectRoute ) {
			return (
				<Redirect to={from} />
			)
		} else {
			return (
				<div>
					<h3>Debes de estar logueado para ver esta página <mark>{from.pathname}</mark></h3>
					<button onClick={this.login}>Log in</button>
				</div>
			)
		}
	}
}

export default AuthSite