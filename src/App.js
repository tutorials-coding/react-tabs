import './App.scss'

import LayoutCentered from './LayoutCentered'
import Tabs from './Tabs'

const tabs = [
  {
    text: 'Profile',
    renderContent: () => (
      <LayoutCentered>
        <span>Profile Tab</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Contact',
    renderContent: () => (
      <LayoutCentered>
        <span>Contact Tab</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Settings',
    renderContent: () => (
      <LayoutCentered>
        <span>Settings Tab</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Messages',
    renderContent: () => (
      <LayoutCentered>
        <span>Messages Tab</span>
      </LayoutCentered>
    ),
  },
  {
    text: 'Bookmarks',
    renderContent: () => (
      <LayoutCentered>
        <span>Bookmarks Tab</span>
      </LayoutCentered>
    ),
  },
]

function App() {
  return (
    <div className="app__main-container">
      <div className="app__title-container">Tabs Component</div>
      <div className="app__content-container">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default App
