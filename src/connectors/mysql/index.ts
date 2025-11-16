import { createConnection } from 'mysql2/promise';

class MySQLConnector {
    private connection;

    constructor(private config: { host: string; user: string; password: string; database: string }) {}

    async connect() {
        this.connection = await createConnection(this.config);
    }

    async query(sql: string, params: any[] = []) {
        const [results] = await this.connection.execute(sql, params);
        return results;
    }

    async close() {
        await this.connection.end();
    }
}

export default MySQLConnector;