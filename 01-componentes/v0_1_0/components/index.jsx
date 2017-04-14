import React, { Component, PropTypes } from 'react'
import CourseAddForm from './CourseAddForm'
import CoursesList from './CoursesList'

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      courses: [
        { id: 1, name: 'React desde cero', teacher:'Jonathan MirCha' },
        { id: 2, name: 'Drupal 8 desde cero', teacher:'Alberto Quiroga' },
      ]
    }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
  }

  handleOnAddCourse(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      course = {
        id: form.id.value,
        name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
        teacher: ( form.teacher.value ) ? form.teacher.value : App.defaultProps.teacher
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })

    form.reset()
  }

  render() {
    return(
      <div>
        <CourseAddForm onAddCourse={this.handleOnAddCourse} />
        <CoursesList courses={this.state.courses} />
      </div>
    )
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
  name: 'Curso Desconocido',
  teacher: 'Profesor No Asignado'
}

export default App