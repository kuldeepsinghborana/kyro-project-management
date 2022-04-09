import Task from './Task.model'

class Project {
    tasks: Array<Task>;
    constructor(tasks) {
        this.tasks = tasks;
    }
}

export default Project;