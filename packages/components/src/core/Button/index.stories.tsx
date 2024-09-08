import React from 'react'
import { StoryFn } from '@storybook/react/types-6-0'
import { Button, ButtonColor, ButtonProps } from '.'

export default {
  title: 'components/core/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.values(ButtonColor)
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'small']
      }
    }
  }
}

const Template: StoryFn<ButtonProps & { children: React.ReactNode }> = args => <Button {...args} />

const defaultProps: ButtonProps = {
  color: ButtonColor.Primary,
  inline: false,
  disabled: false,
  size: 'medium',
  children: 'ログイン'
}

export const overview = Template.bind({}) as StoryFn<ButtonProps & { children: React.ReactNode }>
overview.args = defaultProps

export const large = Template.bind({}) as StoryFn<ButtonProps & { children: React.ReactNode }>
large.args = {
  ...defaultProps,
  size: 'large'
}

export const small = Template.bind({}) as StoryFn<ButtonProps & { children: React.ReactNode }>
small.args = {
  ...defaultProps,
  size: 'small'
}
