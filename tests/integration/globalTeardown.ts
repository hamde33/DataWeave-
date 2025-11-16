import { execSync } from 'child_process';

export default async function globalTeardown() {
  try {
    execSync('docker-compose -f docker-compose.test.yml down', { stdio: 'inherit' });
  } catch (e) {
    // ignore
  }
  console.log('Tear down complete');
}