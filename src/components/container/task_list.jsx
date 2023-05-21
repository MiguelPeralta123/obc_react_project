import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.Normal)

    return (
        <div>
            <h1>Your tasks:</h1>
            <div>
                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
