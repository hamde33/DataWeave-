import { SyncEngine } from '../../core/engine';
import { Scheduler } from '../../core/scheduler';
import { Pipeline } from '../../core/pipeline';

describe('Core Functionality Tests', () => {
    let syncEngine: SyncEngine;
    let scheduler: Scheduler;
    let pipeline: Pipeline;

    beforeEach(() => {
        syncEngine = new SyncEngine();
        scheduler = new Scheduler();
        pipeline = new Pipeline();
    });

    test('SyncEngine should initialize correctly', () => {
        expect(syncEngine).toBeDefined();
    });

    test('Scheduler should schedule tasks correctly', () => {
        const task = jest.fn();
        scheduler.schedule(task, 1000);
        expect(scheduler.getTasks().length).toBe(1);
    });

    test('Pipeline should process data correctly', () => {
        const inputData = { key: 'value' };
        const processedData = pipeline.process(inputData);
        expect(processedData).toEqual(expect.objectContaining({ key: 'value' }));
    });

    afterEach(() => {
        syncEngine = null;
        scheduler = null;
        pipeline = null;
    });
});