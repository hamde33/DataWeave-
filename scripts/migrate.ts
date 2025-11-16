import { createConnection } from 'typeorm';
import { MySQLConnector } from '../src/connectors/mysql';
import { PostgresConnector } from '../src/connectors/postgres';
import { MSSQLConnector } from '../src/connectors/mssql';
import { CSVConnector } from '../src/connectors/csv';

async function migrate() {
    try {
        const mysqlConnection = await createConnection(MySQLConnector);
        const postgresConnection = await createConnection(PostgresConnector);
        const mssqlConnection = await createConnection(MSSQLConnector);
        const csvConnector = new CSVConnector();

        // Perform migration logic here
        console.log('Migration started...');

        // Example: Migrate data from MySQL to PostgreSQL
        const data = await mysqlConnection.query('SELECT * FROM your_table');
        await postgresConnection.manager.save(data);

        console.log('Migration completed successfully.');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        // Close connections
        await mysqlConnection.close();
        await postgresConnection.close();
        await mssqlConnection.close();
    }
}

migrate();