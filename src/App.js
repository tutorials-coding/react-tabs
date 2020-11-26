import './App.scss'

import TabHeaderItem from './TabHeaderItem'

function App() {
  return (
    <div className="app__main-container">
      <div className="app__title-container">Title</div>
      <div className="app__content-container">
        <TabHeaderItem />
      </div>
    </div>
  )
}

export default App
