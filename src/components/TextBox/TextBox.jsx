import './textBox.css'

export const TextBox = ({textTitle, textDesc}) => {
  return (
      <div className="textBoxContainer">
        <div className="textBox__frameA" />
        <div className="textBox__frameB" />
        {textTitle && <h2>{textTitle}</h2>}
        <p>{textDesc}</p>
    </div>
  )
}
