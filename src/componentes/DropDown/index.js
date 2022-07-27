import './DropDown.css'

const DropDown = props => {
  return (
    <div className="DropDown">
      <label>{props.label}</label>
      <select
        onChange={event => props.changed(event.target.value)}
        value={props.valueChanged}
      >
        <option value=""></option>
        {props.options.map(options => (
          <option value={props.value} key={options}>
            {options}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
