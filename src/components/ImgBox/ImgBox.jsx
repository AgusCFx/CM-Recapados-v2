import './imgBox.css'

export const ImgBox = ({setImg}) => {
  return (
    <div className='imgBoxContainer' >
        <img className='imgBox__img' src={setImg} />
    </div>
  )
}
