import React, { Component, PropTypes } from 'react'
import uid from 'uid'
import $ from 'jquery'
import { categories, courses, teachers } from '../../data/'
import CourseAddForm from './CourseAddForm'
import CoursesList from './CoursesList'

class Courses extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      courses: []
    }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.resetData = this.resetData.bind(this)
  }

  handleOnAddCourse(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      course = {
        id: ( form.id.value ) ? form.id.value : Courses.defaultProps.id,
        name: ( form.name.value ) ? form.name.value : Courses.defaultProps.name,
        teacher: ( form.teacher.value ) ? form.teacher.value : Courses.defaultProps.teacher
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })

    form.reset()
  }

  fetchData() {
    /*setTimeout( () => this.setState( { courses:courses } ), 3000 )*/
    $('#root')
      .fadeOut( 3000, () => this.setState( { courses:courses } ) )
      .fadeIn()
  }

  resetData() {
    /*this.setState( { courses: [] } )*/
    $('#root')
      .fadeOut( 3000, () => this.setState( { courses:[] } ) )
      .fadeIn()
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    if ( !this.state.courses.length ) {
      return (
        <div>
          <p>No hay cursos :(</p>
          <button onClick={this.fetchData}>Cargar Cursos</button>
        </div>
      )
    } else {
      return(
        <div>
          <CourseAddForm onAddCourse={this.handleOnAddCourse} />
          <CoursesList courses={this.state.courses} />
          <button onClick={this.resetData}>Borrar Cursos</button>
        </div>
      )
    }
  }
}

Courses.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

Courses.defaultProps = {
  id: uid(10),
  name: 'Curso Desconocido',
  teacher: 'Profesor No Asignado'
}

export default Courses