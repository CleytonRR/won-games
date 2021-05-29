import { Story, Meta } from '@storybook/react'
import Highlight, { HighLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read Dead it's back`,
    subtitle: `Come see John's new adventures`,
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr'
  }
} as Meta

export const Basic: Story<HighLightProps> = (args) => <Highlight {...args} />

export const WithFloatImage: Story<HighLightProps> = (args) => (
  <Highlight {...args} />
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
