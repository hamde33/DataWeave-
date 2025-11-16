import { ScheduledTask } from './types';
import { Scheduler } from 'node-schedule';

class SyncScheduler {
    private tasks: ScheduledTask[] = [];

    constructor() {}

    scheduleTask(task: ScheduledTask) {
        const job = Scheduler.scheduleJob(task.cronExpression, () => {
            this.executeTask(task);
        });
        this.tasks.push({ ...task, job });
    }

    private executeTask(task: ScheduledTask) {
        // Logic to execute the synchronization task
        console.log(`Executing task: ${task.name}`);
        // Call the synchronization engine or relevant components here
    }

    cancelTask(taskName: string) {
        const taskIndex = this.tasks.findIndex(task => task.name === taskName);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].job.cancel();
            this.tasks.splice(taskIndex, 1);
            console.log(`Cancelled task: ${taskName}`);
        }
    }
}

export default SyncScheduler;