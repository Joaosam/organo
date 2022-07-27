import './FieldText.css'

const FieldText = props => {
  const inputText = event => {
    props.changed(event.target.value)
  }

  return (
    <div className="inputText">
      <label>{props.label}</label>
      <input
        value={props.valueChanged}
        onChange={inputText}
        required={props.mandatory}
        placeholder={props.placeholder}
      ></input>
    </div>
  )
}

export default FieldText
