const presets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  'next/babel',
  '@babel/preset-typescript',
];
const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-private-methods',
  'inline-dotenv',
];

module.exports = {
  presets,
  plugins,
};
