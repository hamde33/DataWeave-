{
  "database": {
    "mysql": {
      "host": "localhost",
      "port": 3306,
      "user": "root",
      "password": "",
      "database": "my_database"
    },
    "postgres": {
      "host": "localhost",
      "port": 5432,
      "user": "postgres",
      "password": "",
      "database": "my_database"
    },
    "mssql": {
      "server": "localhost",
      "port": 1433,
      "user": "sa",
      "password": "",
      "database": "my_database"
    },
    "csv": {
      "filePath": "./data/my_data.csv",
      "delimiter": ","
    }
  },
  "synchronization": {
    "interval": 60000,
    "retryAttempts": 3,
    "logLevel": "info"
  },
  "transforms": {
    "dateFormat": "YYYY-MM-DD",
    "fieldMappings": {}
  }
}