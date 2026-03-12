import path from 'node:path';

const quote = (value) => `'${value.replace(/'/g, `'\\''`)}'`;

const mobileCommands = (files) => {
  const mobileRoot = path.resolve('apps/mobile');
  const mobileFiles = files.map((file) =>
    path.relative(mobileRoot, path.resolve(file)),
  );
  const fileArgs = mobileFiles.map(quote).join(' ');

  if (!fileArgs) {
    return [];
  }

  return [
    `npm exec -w apps/mobile eslint -- --fix --config eslint.config.mjs ${fileArgs}`,
    `npm exec -w apps/mobile prettier -- --write ${fileArgs}`,
  ];
};

const docsAndJsonCommands = (files) => {
  const filteredFiles = files.filter(
    (file) => !file.startsWith('packages/database/generated/'),
  );
  const fileArgs = filteredFiles.map(quote).join(' ');

  if (!fileArgs) {
    return [];
  }

  return [`prettier --write ${fileArgs}`];
};

export default {
  'apps/admin/**/*.{ts,tsx}': [
    'eslint --fix --config apps/admin/eslint.config.js',
    'prettier --write',
  ],
  'apps/api/**/*.{ts,tsx}': [
    'eslint --fix --config apps/api/eslint.config.mjs',
    'prettier --write',
  ],
  'apps/mobile/**/*.{ts,tsx}': mobileCommands,
  '*.{md,json}': docsAndJsonCommands,
};
