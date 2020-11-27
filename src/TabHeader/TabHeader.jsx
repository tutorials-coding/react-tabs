import React from 'react'

import TabHeaderItem from '../TabHeaderItem'

import './TabHeader.scss'

export function TabHeader({ tabs, activeIndex }) {
  function handleClick() {}

  return (
    <div className="tab-header__container" onClick={handleClick}>
      {tabs.map((tab, index) => (
        <div className="tab-header__header-item-container" key={index}>
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
