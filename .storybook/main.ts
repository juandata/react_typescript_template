module.exports = {
  core: {
      builder: 'webpack5',
    },
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-knobs/register',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
  }
};
