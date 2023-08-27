import './App.css'
import Banner from './Componentes/Banner'
import Boton from './Componentes/Button/index.jsx'
import Header from './Componentes/Header'
import Logo from './Componentes/Logo'
import {botonNuevoVideoBorder, botonNuevoVideoBackground} from './Componentes/UI/variables'
import logotipo from './assets/logotipo.png'
import banner from './assets/banner.png'
import { BoxBanner, Player, PlayerBanner, TextBanner1, TextBanner2, TextBanner3, TextBoxBanner } from './Componentes/BoxBanner'
import player from './assets/player.png'
import Footer from './Componentes/Footer'
import GlobalStyle from './GlobalStyle'

function App() {
  const home = () => {
    window.location.href = '/'
  }
  return (
    <>
    <GlobalStyle/>
    <Header>
    <Logo src={logotipo} alt="Logo Aluraflix" onClick={home}></Logo>
    <Boton $colorFondo={botonNuevoVideoBackground} $borde={botonNuevoVideoBorder} >Nuevo Video</Boton>
    </Header>
    <Banner $background={banner}>
      <BoxBanner>
        <TextBoxBanner>
      <TextBanner1>Front End</TextBanner1>
      <TextBanner2>Challenge React</TextBanner2>
      <TextBanner3>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</TextBanner3>
      </TextBoxBanner>
      <PlayerBanner>
        <Player src={player}></Player>
      </PlayerBanner>
      </BoxBanner>
 
    </Banner>
    <Footer>
    <Logo src={logotipo} alt="Logo Aluraflix"></Logo>
    </Footer>
    </>
  )
}

export default App
