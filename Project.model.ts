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

    async startProject() {
        let todoTasks = this.getToDoTasks();
        while(todoTasks.length) {
            // try to perform all task and set the promises accordingly;
            const Promises = todoTasks.map(async task => {
                const availableUsers = this.getAvailableUsers();
                if(task.canStart(availableUsers)) {
                    return await task.perform(availableUsers);
                }
                return null;
            });
            await Promise.all(Promises)
            let newTodoTask = this.getToDoTasks();
            // if not a single todoTask get done then the project can not be completed
            // so returning -1
            if(newTodoTask.length === todoTasks.length) {
                return -1;
            }
        }
        return 1;
    }
}

export default Project;