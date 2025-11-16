interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

interface CsvConfig {
  filePath: string;
  delimiter?: string;
}

interface SyncConfig {
  source: DatabaseConfig | CsvConfig;
  destination: DatabaseConfig | CsvConfig;
  schedule: string; // Cron-like schedule
}

interface SyncResult {
  success: boolean;
  message: string;
  recordsProcessed: number;
}

interface TransformFunction {
  (data: any): any;
}

interface Adapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  fetchData(query: string): Promise<any[]>;
  saveData(data: any[]): Promise<SyncResult>;
}

export {
  DatabaseConfig,
  CsvConfig,
  SyncConfig,
  SyncResult,
  TransformFunction,
  Adapter,
};