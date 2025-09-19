import path from 'path';

import * as dotenv from 'dotenv';

let loaded = false;
export function loadEnv(rootDir: string = process.cwd()) {
  if (loaded) return;
  dotenv.config({ path: path.join(rootDir, '.env') });
  loaded = true;
}

export function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}
