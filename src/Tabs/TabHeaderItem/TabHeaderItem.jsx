import React from 'react'

import './TabHeaderItem.scss'

export function TabHeaderItem({ text, onClick, active }) {
  function handleClick() {
    onClick()
  }

  return (
    <div className="tab-header-item__container" onClick={handleClick}>
      <div
        className={`tab-header-item__left-corner ${
          active ? 'tab-header-item__left-corner--active' : ''
        }`}
      ></div>
      <div
        className={`tab-header-item__content-container ${
          active ? 'tab-header-item__content-container--active' : ''
        }`}
      >
        <span className="tab-header-item__content-container__text">{text}</span>
      </div>
      <div
        className={`tab-header-item__right-corner ${
          active ? 'tab-header-item__right-corner--active' : ''
        }`}
      ></div>
    </div>
  )
}
