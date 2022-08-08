import './textBox.css'

export const TextBox = ({text}) => {
  return (
      <div className="textBoxContainer">
        <div className="textBox__frameA" />
        <div className="textBox__frameB" />
        <p>{text}</p>
    </div>
  )
}
