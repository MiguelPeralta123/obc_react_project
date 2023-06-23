import React, { useState, useEffect } from 'react';
import { TaskComponent } from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

// Importing styles
import '../../styles/task.scss'

export const TaskListComponent = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task list has just been created')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('Task list is about to be unmounted')
        };
    });

    const completeTask = (task) => {
        const index = tasks.indexOf(task)
        var tempTasks = [...tasks]
        tempTasks[index].completed = !tasks[index].completed
        setTasks(tempTasks)
    }

    const deleteTask = (task) => {
        const index = tasks.indexOf(task)
        var tempTasks = [...tasks]
        tempTasks.splice(index, 1) // This means that, starting from the selected task, I´m gonna delete one element
        setTasks(tempTasks)
    }

    const addTask = (task) => {
        var tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    const TasksTable = () => {
        return (
            <table className='w-100'>
                <thead>
                    <tr className='d-flex justify-content-between'>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>
                    })}
                </tbody>
            </table>
        )
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h5>Your tasks:</h5>
            </div>
            <div className='card-body'>
                {loading ?
                    /* TO DO: Add a loading spinner */
                    <h4>Loading...</h4> :
                    tasks.length > 0 ?
                        <TasksTable></TasksTable> :
                        <div>
                            <h3>There are no tasks</h3>
                            <h4>Create your first task!</h4>
                        </div>
                }
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};