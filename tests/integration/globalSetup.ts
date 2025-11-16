import net from 'net';
import { execSync } from 'child_process';

function waitPort(host: string, port: number, timeout = 30000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    (function check() {
      const sock = new net.Socket();
      sock.setTimeout(2000);
      sock.on('connect', () => { sock.destroy(); resolve(); });
      sock.on('error', () => {
        sock.destroy();
        if (Date.now() - start > timeout) return reject(new Error(`Port ${host}:${port} timeout`));
        setTimeout(check, 500);
      });
      sock.on('timeout', () => { sock.destroy(); setTimeout(check, 500); });
      sock.connect(port, host);
    })();
  });
}

export default async function globalSetup() {
  // start docker-compose (requires docker-compose in PATH)
  try {
    execSync('docker-compose -f docker-compose.test.yml up -d', { stdio: 'inherit' });
  } catch (e) {
    // ignore if already up
  }
  await waitPort('localhost', 3307); // mysql mapped port
  await waitPort('127.0.0.1', 5433); // postgres mapped port

  // TODO: run SQL fixtures via mysql / psql clients or a DB library
  console.log('Test DBs are ready');
}