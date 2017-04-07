class MyAwesomeApp extends React.Component {
  render() {
    return(
      <article>
        <h1 className="title">Mi primer App en {this.props.name}</h1>
      </article>
    )
  }
}

ReactDOM.render(
  <MyAwesomeApp name="React" />,
  document.getElementById('app')
)