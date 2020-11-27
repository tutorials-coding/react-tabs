import React from 'react'

import TabHeaderItem from '../TabHeaderItem'

import './TabsHeader.scss'

export function TabsHeader({ tabs, activeIndex }) {
  function handleClick() {}

  return (
    <div className="tabs-header__container" onClick={handleClick}>
      {tabs.map((tab, index) => (
        <div className="tabs-header__header-item-container" key={index}>
          <TabHeaderItem
            text={tab.text}
            onClick={tab.onClick}
            active={index === activeIndex}
          />
        </div>
      ))}
    </div>
  )
}
