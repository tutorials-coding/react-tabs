import React from 'react'

import { Tabs } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'object' },
  },
}

const Template = (args) => <Tabs {...args} />

export const Base = Template.bind({})
Base.args = {
  tabs: [
    {
      text: 'Profile',
      renderContent: () => <div>Profile Tab</div>,
    },
    {
      text: 'Contact',
      renderContent: () => <div>Contact Tab</div>,
    },
    {
      text: 'Settings',
      renderContent: () => <div>Settings Tab</div>,
    },
  ],
}
