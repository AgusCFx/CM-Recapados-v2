import './whatsapp.css'

import wppLogo from './../../../../assets/images/wppLogo.png'

export const Whatsapp = () => {
  return (
    <a className='whatsappLink' href="https://api.whatsapp.com/send?phone=5493414688840">
        <img src={wppLogo} alt="Whatsapp" />
    </a>
  )
}
