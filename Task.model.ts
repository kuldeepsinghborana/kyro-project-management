import Resouce from './Resource.model';

class Task {
    name: string;
    dependsOnResources: Array<Resouce>;
    requireTimeToComplete: number;
    accessUsers: Array<string>;
    dependsOnTasks: Array<Task>;

    constructor(name, requireTimeToComplete, dependsOnResources = [], accessUsers= [], dependsOnTasks = []) {
        this.name = name;
        this.requireTimeToComplete = requireTimeToComplete;

        this.dependsOnResources = dependsOnResources;
        this.accessUsers = accessUsers;
        this.dependsOnTasks = dependsOnTasks;
    }
}

export default Task;