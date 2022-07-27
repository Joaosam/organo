import './ButtonCard.css'

const Button = ({ name, team, image, position, children }) => {
  const validate = name && team && image && position
  return !validate ? (
    <button disabled className="button">
      {children}
    </button>
  ) : (
    <button className="buttonEnable">{children}</button>
  )
}

export default Button
