# Migrations for Data Synchronization Tool

This directory contains the migration scripts and documentation necessary for managing database schemas across different data sources used in the Data Synchronization Tool.

## Migration Overview

Migrations are essential for maintaining the integrity and structure of the databases involved in the synchronization process. This tool supports multiple databases, including MySQL, PostgreSQL, SQL Server, and CSV files. 

## How to Perform Migrations

1. **Setup Migration Environment**: Ensure that your database connection settings are correctly configured in the `.env` file or the configuration file.

2. **Run Migration Scripts**: Use the provided migration scripts located in the `scripts/migrate.ts` file to apply schema changes. You can execute the script using the command line.

3. **Check Migration Status**: After running migrations, verify the status of your database schemas to ensure that all changes have been applied successfully.

4. **Rollback Migrations**: If necessary, you can rollback migrations by executing the appropriate rollback commands defined in the migration scripts.

## Best Practices

- Always back up your databases before performing migrations.
- Test migrations in a development environment before applying them to production.
- Document any changes made to the database schema for future reference.

For more detailed instructions on specific migration commands and options, refer to the documentation in the `scripts/migrate.ts` file.