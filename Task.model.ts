import Resouce from './Resource.model';
import Status from './status.constants';
import User from './User.model';

class Task {
    name: string;
    dependsOnResources: Array<Resouce>;
    requireTimeToComplete: number;
    accessUsers: Array<User>;
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

    canStart(availableUsers: Array<User>) {
        if (!this.dependsOnResources.every(resource => resource.availability)) {
            return false;
        }
        if (!this.dependsOnTasks.every(task => task.status === Status.Complete)) {
            return false;
        }
        if(this.accessUsers.length && !this.accessUsers.some(user => availableUsers.includes(user))) {
            return false;
        }
        return true;
    }

    async perform(availableUsers: Array<User>) {
        let performingUser = availableUsers.find(user => this.accessUsers.includes(user));
        performingUser && performingUser.setAvailability(performingUser);
        this.dependsOnResources.forEach(resource => {
            resource.setAvailability(false);
        })
        this.status = Status.InProgress;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.status = Status.Complete;
                performingUser && performingUser.setAvailability(true);
                this.dependsOnResources.forEach(resource => resource.setAvailability(true));
                resolve();
            }, this.requireTimeToComplete);
        })

    }
}

export default Task;