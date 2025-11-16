import { Client } from 'pg';
import { DatabaseConnector } from '../../core/adapters';

export class PostgresConnector extends DatabaseConnector {
    private client: Client;

    constructor(config: { host: string; port: number; user: string; password: string; database: string }) {
        super();
        this.client = new Client(config);
    }

    async connect(): Promise<void> {
        await this.client.connect();
    }

    async disconnect(): Promise<void> {
        await this.client.end();
    }

    async query(queryText: string, params?: any[]): Promise<any> {
        const res = await this.client.query(queryText, params);
        return res.rows;
    }

    // Additional methods for interacting with PostgreSQL can be added here
}