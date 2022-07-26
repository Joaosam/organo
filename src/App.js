import { useState } from 'react'
import Banner from './componentes/Banner'
import Footer from './componentes/Footer'
import Forms from './componentes/Forms'
import Position from './componentes/Position'
import TitlePosition from './componentes/TitlePosition'

function App() {
  const arrayPosition = [
    {
      name: 'Goleiro',
      primaryColor: '#57C278',
      secondeColor: '#D9F7E9'
    },
    {
      name: 'Zagueiro',
      primaryColor: '#6278F7',
      secondeColor: '#E8F8FF'
    },
    {
      name: 'Lateral',
      primaryColor: '#A6D157',
      secondeColor: '#F0F8E2'
    },
    {
      name: 'Meio-Campo',
      primaryColor: '#E06B69',
      secondeColor: '#FDE7E8'
    },
    {
      name: 'Atacante',
      primaryColor: '#DB6EBF',
      secondeColor: '#FAE9F5'
    }
  ]

  const [players, setPlayers] = useState([])

  const newPlayerAdd = newPlayer => {
    setPlayers([...players, newPlayer])
  }
  return (
    <div className="App">
      <Banner />
      <Forms
        position={arrayPosition.map(position => position.name)}
        registeredPlayer={newPlayer => newPlayerAdd(newPlayer)}
      />
      <TitlePosition />
      {arrayPosition.map(position => (
        <Position
          key={position.name}
          name={position.name}
          primaryColor={position.primaryColor}
          secondeColor={position.secondeColor}
          // Filtragem das posições
          players={players.filter(player => player.position === position.name)}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
