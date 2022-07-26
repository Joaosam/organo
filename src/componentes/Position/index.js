import Players from '../Players'
import './Position.css'

const Position = props => {
  return props.players.length > 0 ? (
    <section
      className="position"
      style={{ backgroundColor: props.secondeColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

      <div className="players">
        {props.players.map(players => (
          <Players
            key={players.name}
            image={players.image}
            name={players.name}
            team={players.team}
            bgColor={props.primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    <section
      className="position"
      style={{ backgroundColor: props.secondeColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

      <div className="players">
        <Players
          key="default"
          image="./assets/question.png"
          name="Nome do jogador"
          team="Time do jogador"
          bgColor={props.primaryColor}
        />
      </div>
    </section>
  )
}

export default Position
