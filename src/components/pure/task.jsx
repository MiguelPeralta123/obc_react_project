import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

export const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log(`Task ${task.name} has been just created`)
        return () => {
            console.log(`Task ${task.name} is about to be unmounted`)
        };
    }, [task]);

    return (
        <div>
            <h2>Name: {task.name}</h2>
            <h3>Description: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            <h5>This task is: {task.completed ? 'Completed' : 'Pending'}</h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};