import React from 'react'

import TabHeaderItem from '../TabHeaderItem'

import './TabsHeader.scss'

export function TabsHeader({ tabs, activeIndex, onTabClick }) {
  function handleClick(index) {
    onTabClick(index)
  }

  return (
    <div className="tabs-header__container">
      {tabs.map((tab, index) => (
        <div className="tabs-header__header-item-container" key={index}>
          <TabHeaderItem
            text={tab.text}
            onClick={() => handleClick(index)}
            active={index === activeIndex}
          />
        </div>
      ))}
    </div>
  )
}
