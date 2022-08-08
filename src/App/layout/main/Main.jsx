import { TextBox } from "../../../components/TextBox/TextBox"
import { ImgBox } from "../../../components/ImgBox/ImgBox"
import RepartoImg from "../../../assets/images/reparto-desk.jpg"

export const Main = () => {
  return (
    <main>
        <TextBox textTitle='Recapado para Camiones' textDesc='Servicio de reparacion, recapado, recauchutado, reconstruccion, rellenado... damos nueva vida a tus neumaticos para que siga manteniendo el rendimiento más optimo posible.'/>
        <ImgBox setImg={RepartoImg} />
        <TextBox textDesc='Amplia gama de bandas especificas para distintas medidas, podes elegir del catalogo el que más se adapta a tus necesidades.'/>
        <ImgBox setImg={RepartoImg} />
    </main>
  )
}
