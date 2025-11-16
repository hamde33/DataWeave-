import { Command } from 'commander';
import { synchronize } from '../core/engine';

const program = new Command();

program
  .version('1.0.0')
  .description('Data Synchronization Tool CLI')
  .option('-s, --source <source>', 'Source database or file')
  .option('-d, --destination <destination>', 'Destination database or file')
  .option('-c, --config <config>', 'Path to configuration file');

program
  .command('sync')
  .description('Synchronize data between source and destination')
  .action(async () => {
    const options = program.opts();
    if (!options.source || !options.destination) {
      console.error('Source and destination must be specified.');
      process.exit(1);
    }
    try {
      await synchronize(options.source, options.destination, options.config);
      console.log('Synchronization completed successfully.');
    } catch (error) {
      console.error('Error during synchronization:', error);
    }
  });

program.parse(process.argv);