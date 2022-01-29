module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@chakra-ui/storybook-addon'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
