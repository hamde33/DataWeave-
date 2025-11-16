import { SyncEngine } from './core/engine';
import { Scheduler } from './core/scheduler';
import { createServer } from './api/server';

const syncEngine = new SyncEngine();
const scheduler = new Scheduler();

const startServices = async () => {
    await syncEngine.initialize();
    await scheduler.start();
    createServer();
};

startServices().catch(err => {
    console.error('Error starting the synchronization tool:', err);
    process.exit(1);
});