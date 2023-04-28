module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    'next/babel',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-private-methods',
  ],
};
