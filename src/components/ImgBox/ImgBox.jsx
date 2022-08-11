import './imgBox.css'

export const ImgBox = ({imgDesk,imgMobile, alte}) => {
  return (
    <div className='imgBoxContainer' >
        <img 
          className='imgBox__img'
          srcset={`${imgMobile} 500w, ${imgDesk} 1440w`}
          src={imgDesk}
          alt={alte}/>
    </div>
  )
}
