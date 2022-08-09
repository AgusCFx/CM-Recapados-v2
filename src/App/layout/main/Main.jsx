import { TextBox } from "../../../components/TextBox/TextBox"
import { ImgBox } from "../../../components/ImgBox/ImgBox"
import './main.css'

import RepartoImg from "../../../assets/images/reparto-desk.jpg"
import CatalogoImg from "../../../assets/images/catalogo-desk.jpg"

export const Main = () => {
  return (
    <main>
        <TextBox textTitle='Recapado para Camiones' textDesc='Servicio de reparacion, recapado, recauchutado, reconstruccion, rellenado... damos nueva vida a tus neumaticos para que siga manteniendo el rendimiento más optimo posible.'/>
        <ImgBox setImg={RepartoImg} />
        <TextBox textDesc='Amplia gama de bandas especificas para distintas medidas, podes elegir del catalogo el que más se adapta a tus necesidades.'/>
        <ImgBox setImg={CatalogoImg} />
        <button className='catalogoBtn'>
          <div class="downloading">
            <span class="custom-arrow"></span>
          </div>
          DESCARGAR CATALOGO
        </button>
    </main>
  )
}
