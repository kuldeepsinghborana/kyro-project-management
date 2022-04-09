import Resouce from './Resource.model';

class Task {
    name: string;
    dependsOnResources: Array<Resouce>;
    requireTimeToComplete: number;
    accessUsers: Array<string>;

    constructor(name, requireTimeToComplete) {
        //default values of resource and users for dependency.
        this.dependsOnResources = [];
        this.accessUsers = [];

        this.name = name;
        this.requireTimeToComplete = requireTimeToComplete;
    }
}

export default Task;