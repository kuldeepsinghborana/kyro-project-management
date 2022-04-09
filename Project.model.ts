import Task from './Task.model'
import Status from './status.constants';
import User from './User.model';

class Project {
    tasks: Array<Task>;
    users: Array<User>;
    constructor(tasks, users) {
        this.tasks = tasks;
        this.users = users;
    }
    
    getToDoTasks() {
        return this.tasks.filter(task => task.status === Status.ToDo);
    }

    getAvailableUsers() {
        return this.users.filter(user => user.availability);
    }

    startProject() {
        let todoTasks = this.getToDoTasks();
        while(todoTasks.length) {
            for(let task of todoTasks) {
                const availableUsers = this.getAvailableUsers();
                if(task.canStart(availableUsers)) {
                    //TODO: perform task here;
                }
            }
            todoTasks = this.getToDoTasks();
        }
    }
}

export default Project;