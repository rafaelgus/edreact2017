import React, { Component } from 'react'

class MyAwesomeApp extends Component {
  render() {
    return(
      <article>
        <h1 className="title">Mi primer App en {this.props.name}</h1>
        <img src="https://facebook.github.io/react/img/logo.svg" />
      </article>
    )
  }
}

export default MyAwesomeApp