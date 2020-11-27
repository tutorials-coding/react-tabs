import React from 'react'

import { TabsHeader } from './TabsHeader'

export default {
  title: 'TabsHeader',
  component: TabsHeader,
  argTypes: {
    tabs: { control: 'object' },
    activeIndex: { control: 'number' },
  },
}

const Template = (args) => <TabsHeader {...args} />

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
