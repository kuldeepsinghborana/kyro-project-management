import Resouce from './Resource.model';
import Status from './status.constants';

class Task {
    name: string;
    dependsOnResources: Array<Resouce>;
    requireTimeToComplete: number;
    accessUsers: Array<string>;
    dependsOnTasks: Array<Task>;
    status: Status;

    constructor(name, requireTimeToComplete, dependsOnResources = [], accessUsers= [], dependsOnTasks = []) {
        this.name = name;
        this.requireTimeToComplete = requireTimeToComplete;

        this.dependsOnResources = dependsOnResources;
        this.accessUsers = accessUsers;
        this.dependsOnTasks = dependsOnTasks;
        this.status = Status.ToDo;
    }
}

export default Task;