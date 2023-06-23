import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';

import '../../styles/task.scss'

export const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        //console.log(`Task ${task.name} has been just created`)
        //return () => {
        //    console.log(`Task ${task.name} is about to be unmounted`)
        //};
    }, [task]);

    const taskLevelBadge = () => {
        switch (task.level) {
            case Levels.Normal:
                return <h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>
            case Levels.Urgent:
                return <h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>
            case Levels.Blocking:
                return <h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>
            default:
                break;
        }
    }

    /* STYLES */
    const completedStyle = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const pendingStyle = {
        textDecoration: 'none'
    }

    const taskCompletedIcon = () => {
        return task.completed ? 
        <i onClick={() => complete(task)} className='bi-toggle-on cursor-pointer' style={{ color: 'green' }}></i> : 
        <i onClick={() => complete(task)} className='bi-toggle-off cursor-pointer' style={{ color: 'grey' }}></i>
    }

    return (
        <tr className='fw-normal d-flex justify-content-between' style={task.completed ? completedStyle : pendingStyle}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={() => {remove(task)}} className='bi-trash cursor-pointer' style={{color:'tomato'}}></i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};