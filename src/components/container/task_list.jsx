import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import { TaskComponent } from '../pure/task';

// Importing styles
import '../../styles/task.scss'

export const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.Normal)

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task list has been created')
        setLoading(true)
        return () => {
            console.log('Task list is about to be unmounted')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TO DO: Change task completed status')
    }

    return (
        <div>
            <h1>Your tasks:</h1>
            <div>
                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
};