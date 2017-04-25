import React, { Component } from 'react'
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'
import { firebaseAuth } from '../data/config'

import Home from './pages/'
import About from './pages/About'
import Protegida from './pages/protected/'
import Register from './pages/Register'
import Login from './pages/Login'
import Error404 from './pages/Error404'

import 'pure-css'
import './index.css'
import EDteamLogo from './media/edteam-logo.png'

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      authed: false,
      loading: true
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    //alert('click')
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
  }

  render() {
    return this.state.loading === false
      ? <h1>Cargando...</h1> 
      : (
        <Router>
          <div>
            <header className="custom-menu-wrapper">
              <div className="pure-menu custom-menu custom-menu-top">
                  <a href="#" className="pure-menu-heading custom-menu-brand">
                    <img src={EDteamLogo} alt="EDteam"/>
                  </a>
                  <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
              </div>
              <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                  </li>
                  <li className="pure-menu-item">
                      <Link to="/acerca" className="pure-menu-link" onClick={this.handleOnClick}>Acerca</Link>
                  </li>
                  <li className="pure-menu-item">
                      <Link to="/registro" className="pure-menu-link" onClick={this.handleOnClick}>Registro</Link>
                  </li>
                  <li className="pure-menu-item">
                      <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                  </li> 
                </ul>
              </div>
            </header>
            <main className="Main">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/acerca' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/registro' component={Register} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      )
  }
}

export default App