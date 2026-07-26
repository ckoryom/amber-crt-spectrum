const { execFileSync } = require('node:child_process');
const { existsSync } = require('node:fs');
const { join } = require('node:path');

const pkg = require('../package.json');
const vsixPath = join(__dirname, '..', `${pkg.name}-${pkg.version}.vsix`);

if (!existsSync(vsixPath)) {
  console.error(`Expected packaged extension at ${vsixPath}. Run "pnpm run package" first.`);
  process.exit(1);
}

execFileSync('code', ['--install-extension', vsixPath, '--force'], {
  stdio: 'inherit'
});
