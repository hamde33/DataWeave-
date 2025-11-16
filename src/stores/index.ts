import { SyncState, SyncLog } from '../types';

class Store {
    private state: SyncState;
    private logs: SyncLog[];

    constructor() {
        this.state = this.initializeState();
        this.logs = [];
    }

    private initializeState(): SyncState {
        return {
            lastSync: null,
            status: 'idle',
            error: null,
        };
    }

    public getState(): SyncState {
        return this.state;
    }

    public updateState(newState: Partial<SyncState>): void {
        this.state = { ...this.state, ...newState };
    }

    public addLog(log: SyncLog): void {
        this.logs.push(log);
    }

    public getLogs(): SyncLog[] {
        return this.logs;
    }
}

export default new Store();