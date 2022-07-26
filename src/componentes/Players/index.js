import './Players.css'

const Players = ({ image, name, team, bgColor }) => {
  return (
    <div className="players">
      <div className="playersCard">
        <div className="header" style={{ backgroundColor: bgColor }}>
          <img src={image} alt={name} />
        </div>
        <div className="description">
          <h4>{name}</h4>
          <h5>{team}</h5>
        </div>
      </div>
    </div>
  )
}

export default Players
