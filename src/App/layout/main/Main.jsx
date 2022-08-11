import { Whatsapp } from "./whatsapp/Whatsapp"
import { TextBox } from "../../../components/TextBox/TextBox"
import { ImgBox } from "../../../components/ImgBox/ImgBox"
import './main.css'

import CataloguePDF from "./../../../assets/pdf/Catalogo_CM_RecapadosV8.1.pdf"

import RepartoImgDesk from "../../../assets/images/reparto-desk.avif"
import RepartoImgMobile from "../../../assets/images/reparto-mobile.avif"
import CatalogoImgDesk from "../../../assets/images/catalogo-desk.avif"
import CatalogoImgMobile from "../../../assets/images/catalogo-mobile.avif"

export const Main = () => {
  return (
    <main>
        
        {/* whatsapp Fixed */}
        <Whatsapp />

        {/* Home Section */}
        <section className="sectionHome" >
          <TextBox 
            textTitle='Recapado para Camiones' 
            textDesc='Servicio de reparacion, recapado, recauchutado, reconstruccion, rellenado... damos nueva vida a tus neumaticos para que siga manteniendo el rendimiento más optimo posible.'/>
          <ImgBox 
            imgDesk={RepartoImgDesk}
            imgMobile={RepartoImgMobile}
            alte='Camioneta de reparto de recapados'/>
        </section>

        {/* Catalogue Section */}
        <section className="sectionCatalogue">
          <TextBox 
            textDesc='Amplia gama de bandas especificas para distintas medidas, podes elegir del catalogo el que más se adapta a tus necesidades.'/>
          <ImgBox 
            imgDesk={CatalogoImgDesk}
            imgMobile={CatalogoImgMobile}
            alte='Bandas recapadas' />
          <a href={CataloguePDF} download="Catalogo CM" className='catalogoBtn'>
            <div class="downloading">
              <span class="custom-arrow"></span>
            </div>
            DESCARGAR CATALOGO
          </a>
        </section>
    </main>
  )
}
