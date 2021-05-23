import { Story, Meta } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Basic: Story = (args) => <Highlight {...args} />
