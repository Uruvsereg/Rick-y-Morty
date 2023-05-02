import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards.jsx'
import NAV from './components/NAV/NAVbar'
import characters from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <NAV/>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
