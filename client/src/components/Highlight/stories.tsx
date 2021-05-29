import { Story, Meta } from '@storybook/react'
import Highlight, { HighLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read Dead it's back`,
    subtitle: `Come see John's new adventures`,
    buttonLabel: 'Buy now',
    buttonLink: '/rdr'
  }
} as Meta

export const Basic: Story<HighLightProps> = (args) => <Highlight {...args} />
