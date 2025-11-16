import { Connection, Request } from 'tedious';
import { DatabaseConnector } from '../../core/adapters';

export class MSSQLConnector extends DatabaseConnector {
    private connection: Connection;

    constructor(config: any) {
        super();
        this.connection = new Connection(config);
    }

    connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.connect(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    disconnect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    executeQuery(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = new Request(query, (err, rowCount, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });

            this.connection.execSql(request);
        });
    }
}