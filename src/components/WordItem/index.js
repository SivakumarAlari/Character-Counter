import './index.css'

const WordItem = props => {
  const {wordDetails} = props
  const {name, nameLength} = wordDetails

  return (
    <li className="eachWord">
      <p className="name-heading">{name}: </p>
      <p className="nameLenght-heading">{nameLength} </p>
    </li>
  )
}
export default WordItem
