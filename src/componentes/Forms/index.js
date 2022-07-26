import './Forms.css'
import FieldText from '../FieldText'
import DropDown from '../DropDown'
import ButtonCard from '../ButtonCard'
import { useState } from 'react'

const Forms = props => {
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')
  const [image, setImage] = useState('')
  const [position, setPosition] = useState('')

  const whenSaving = event => {
    event.preventDefault()
    props.registeredPlayer(
      // Crio um objeto com a chave e valor de mesmo nome. Mesma coisa que "newName: newName" "newOffice: newOffice"...
      { name, team, image, position }
    )
    setName('')
    setTeam('')
    setImage('')
    setPosition('')
  }

  return (
    <section className="containerForms">
      <form onSubmit={whenSaving} className="contentForms">
        <h2 className="descriptionForms">
          Preencha os dados para criar o card do jogador.
        </h2>
        <FieldText
          label="Nome"
          placeholder="Digite o nome"
          mandatory={true}
          changed={valueChanged => setName(valueChanged)}
          valueChanged={name}
        />
        <FieldText
          label="Time"
          placeholder="Digite o time"
          mandatory={true}
          changed={valueChanged => setTeam(valueChanged)}
          valueChanged={team}
        />
        <FieldText
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          mandatory={true}
          changed={valueChanged => setImage(valueChanged)}
          valueChanged={image}
        />
        <DropDown
          label="Posição"
          options={props.position}
          changed={valueChanged => setPosition(valueChanged)}
          valueChanged={position}
        />
        <ButtonCard name={name} team={team} image={image} position={position}>
          Criar card
        </ButtonCard>
      </form>
    </section>
  )
}

export default Forms
