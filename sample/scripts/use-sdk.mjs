// Switches which build of @agravity/public the sample uses.
//   node scripts/use-sdk.mjs local              build ../src/agravityAPI-public, pack dist and install the tarball
//   node scripts/use-sdk.mjs registry [version] install from the npm registry (default: latest)
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sampleDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const libDir = resolve(sampleDir, '..', 'src', 'agravityAPI-public');
const sdkDir = join(sampleDir, '.sdk');

const run = (command, cwd) => execSync(command, { cwd, stdio: 'inherit' });

const [mode, version = 'latest'] = process.argv.slice(2);

if (mode === 'local') {
  if (!existsSync(join(libDir, 'node_modules'))) {
    run('npm install', libDir); // the "prepare" script also builds the library
  }
  run('npm run build', libDir);

  rmSync(sdkDir, { recursive: true, force: true });
  mkdirSync(sdkDir, { recursive: true });
  // The library must be consumed from "dist": the package.json in the source folder has no entry points.
  run(`npm pack ../src/agravityAPI-public/dist --pack-destination .sdk`, sampleDir);
  const tarball = readdirSync(sdkDir).find((f) => f.endsWith('.tgz'));
  run(`npm install ./.sdk/${tarball} --no-package-lock`, sampleDir);
} else if (mode === 'registry') {
  run(`npm install @agravity/public@${version} --no-package-lock`, sampleDir);
} else {
  console.error('Usage: node scripts/use-sdk.mjs local | registry [version]');
  process.exit(1);
}
