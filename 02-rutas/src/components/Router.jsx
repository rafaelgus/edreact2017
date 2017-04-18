import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const StaticSite = () => (
  <Router>
    <div>
      <h1>Primeros pasos con React Router</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <hr/>
      <Route path="/" component={Home} />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Hola bienvenid@s a mi WebApp React :)</h2>
  </div>
)

const Acerca = () => (
  <div>
    <h2>Hola soy tu amigo y docente digital Jonathan MirCha</h2>
  </div>
)

const Servicios = () => (
  <ul>
    <li>Instrucción y Capacitación Web</li>
		<li>Diseño y Desarrollo Web</li>
  </ul>
)

const Contacto = ( { match } ) => (
  <div>
    <h2>Info de Contacto</h2>
    <Route path={`${match.url}/:contactoInfo`} component={InfoContacto} />
    <Route exact path={match.url} render={() => (
      <h3>Manténte en Contaco conmigo :)</h3>
    )} />
    <ul>
			<li><Link to={`${match.url}/email`}>Email</Link></li>
			<li><Link to={`${match.url}/web`}>Sitio Web</Link></li>
			<li><Link to={`${match.url}/ubicacion`}>Ubicación</Link></li>
		</ul>
    <Route path={`${match.url}/email`} render={() => (
			<a href="mailto:jonmircha@gmail.com" target="_blank">jonmircha@gmail.com</a>
		)} />
		<Route path={`${match.url}/web`} render={() => (
			<a href="http://jonmircha.com" target="_blank">jonmircha.com</a>
		)} />
		<Route path={`${match.url}/ubicacion`} render={() => (
			<a href="https://www.google.com.mx/maps/place/Parque+Arboledas/@19.3782554,-99.1644729,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ffa3f81151c7:0x6d8da7a2f98d9c75!8m2!3d19.3782504!4d-99.1622842?hl=es-419" target="_blank">México, CDMX</a>
		)} />
  </div>
)

const InfoContacto = ( { match } ) => (
  <div>
    <h4>{match.params.contactoInfo}</h4>
  </div>
)

export default StaticSite