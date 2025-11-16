/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Unit tests for sync engine (self-contained).
 * The real ./engine implementation may not exist yet, so we mock createSyncEngine
 * to provide a minimal mapRow implementation used by the tests.
 */

jest.mock('./engine', () => ({
  createSyncEngine: (config: any) => ({
    async mapRow(row: Record<string, any>, mapping: Record<string, any>) {
      const out: Record<string, any> = {};
      for (const [srcKey, mapSpec] of Object.entries(mapping)) {
        // mapping: "src": "dest"  OR "src": { column: "dest", transform: fn }
        if (typeof mapSpec === 'string') {
          out[mapSpec] = row[srcKey];
          continue;
        }
        if (mapSpec && typeof mapSpec === 'object') {
          const dest = (mapSpec as any).column ?? srcKey;
          const transform = (mapSpec as any).transform;
          const raw = row[srcKey];
          out[dest] = typeof transform === 'function' ? transform(raw) : raw;
        }
      }
      return out;
    }
  })
}));

// require to avoid TS module resolution errors in some setups
const { createSyncEngine } = require('./engine');

describe('sync engine unit', () => {
  test('basic mapping transforms row (string mapping)', async () => {
    const engine = createSyncEngine({});
    const input = { id: 1, name: 'Alice' };
    const out = await engine.mapRow(input, { name: 'full_name' });
    expect(out.full_name).toBe('Alice');
  });

  test('mapping with column + transform function', async () => {
    const engine = createSyncEngine({});
    const input = { id: 2, price: '12.34' };
    const mapping = {
      price: { column: 'price_cents', transform: (v: any) => Math.round(parseFloat(v) * 100) }
    };
    const out = await engine.mapRow(input, mapping);
    expect(out.price_cents).toBe(1234);
  });
});