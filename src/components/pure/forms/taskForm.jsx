import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'
import { Levels } from '../../../models/levels.enum'

export default function TaskForm({ add }) {

  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef('')

  const addTask = (e) => {
    e.preventDefault()
    var newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value)
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className='card card-body'>
      <label htmlFor='id_name' className='sr-only'>Name</label>
      <input ref={nameRef} type='text' id='id_name' className='form-control form-control-lg' required autoFocus />
      <label htmlFor='id_description' className='sr-only'>Description</label>
      <input ref={descriptionRef} type='text' id='id_description' className='form-control form-control-lg' required />
      <label htmlFor='id_level' className='sr-only'>Priority</label>
      <select ref={levelRef} id='id_level' className='form-control form-control-lg' defaultValue={Levels.Normal} required>
        <option value={Levels.Normal} style={{ backgroundColor: 'blue', color: 'white' }}>Normal</option>
        <option value={Levels.Urgent} style={{ backgroundColor: 'yellow', color: 'white' }}>Urgent</option>
        <option value={Levels.Blocking} style={{ backgroundColor: 'red', color: 'white' }}>Blocking</option>
      </select>
      <button type='submit' className='btn btn-primary mt-4'>Send</button>
    </form>
  )
}

TaskForm.prototypes = {
  add: PropTypes.func.isRequired
}