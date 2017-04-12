import React from 'react'
import Course  from './Course'

const CoursesList = ( props ) => (
  <div>
    <form onSubmit={props.onAddCourse}>
      <input type="text" placeholder="Nombre del Curso" name="name" required />
      <input type="text" placeholder="Profesor" name="teacher" required />
      <input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
      <input type="submit" value="Guardar" />
    </form>
    <ul>
      {
        props.courses.map(course => (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            teacher={course.teacher}
          />
        ))
      }
    </ul>
  </div>
)

export default CoursesList