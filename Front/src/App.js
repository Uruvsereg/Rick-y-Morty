import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/Searchbar/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
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
