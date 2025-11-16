import { MySQLConnector } from '../../connectors/mysql';
import { PostgreSQLConnector } from '../../connectors/postgres';
import { SQLServerConnector } from '../../connectors/mssql';
import { CSVConnector } from '../../connectors/csv';

describe('Database Connectors Integration Tests', () => {
  let mysqlConnector: MySQLConnector;
  let postgresConnector: PostgreSQLConnector;
  let sqlServerConnector: SQLServerConnector;
  let csvConnector: CSVConnector;

  beforeAll(async () => {
    mysqlConnector = new MySQLConnector();
    postgresConnector = new PostgreSQLConnector();
    sqlServerConnector = new SQLServerConnector();
    csvConnector = new CSVConnector();
    
    await mysqlConnector.connect();
    await postgresConnector.connect();
    await sqlServerConnector.connect();
    await csvConnector.connect();
  });

  afterAll(async () => {
    await mysqlConnector.disconnect();
    await postgresConnector.disconnect();
    await sqlServerConnector.disconnect();
    await csvConnector.disconnect();
  });

  test('MySQL Connector should fetch data correctly', async () => {
    const data = await mysqlConnector.fetchData('SELECT * FROM test_table');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  test('PostgreSQL Connector should fetch data correctly', async () => {
    const data = await postgresConnector.fetchData('SELECT * FROM test_table');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  test('SQL Server Connector should fetch data correctly', async () => {
    const data = await sqlServerConnector.fetchData('SELECT * FROM test_table');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  test('CSV Connector should read data correctly', async () => {
    const data = await csvConnector.readData('path/to/test.csv');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });
});