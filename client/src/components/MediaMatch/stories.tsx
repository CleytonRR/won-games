import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Basic: Story = (args) => (
  <MediaMatch {...args}>Only on Desktop</MediaMatch>
)
