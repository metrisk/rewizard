import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    name: 'ReWizard'
  },
})

configure([
  require.context('../src', true, /index\.stories\.mdx/),
  require.context('../src', true, /\.stories\.(tsx|mdx)$/),
], module) 