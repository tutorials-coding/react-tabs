import React from 'react'

import { TabHeader } from './TabHeader'

export default {
  title: 'TabHeader',
  component: TabHeader,
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
  },
}

const Template = (args) => <TabHeader {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'Profile',
      onClick: () => console.log('Profile clicked'),
    },
    {
      text: 'Contact',
      onClick: () => console.log('Contact clicked'),
    },
    {
      text: 'Settings',
      onClick: () => console.log('Settings clicked'),
    },
  ],
  activeIndex: 0,
}