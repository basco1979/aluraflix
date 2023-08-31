import Banner from './Componentes/Banner';
import banner from './assets/banner.png';
import {
  BoxBanner,
  Player,
  PlayerBanner,
  TextBanner1,
  TextBanner2,
  TextBanner3,
  TextBoxBanner,
} from './Componentes/BoxBanner';
import player from './assets/player.png';
import GlobalStyle from './GlobalStyle';
import DefaultPage from './Componentes/DefaultPage';
import Carrousel from './Componentes/Carrousel/Carrousel';
import datosIniciales from '../Data/datos-iniciales.json';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <DefaultPage>
          <Banner $background={banner}>
            <BoxBanner>
              <TextBoxBanner>
                <TextBanner1>Front End</TextBanner1>
                <TextBanner2>Challenge React</TextBanner2>
                <TextBanner3>
                  Este challenge es una forma de aprendizaje. Es un mecanismo
                  donde podrás comprometerte en la resolución de un problema
                  para poder aplicar todos los conocimientos adquiridos en la
                  formación React.
                </TextBanner3>
              </TextBoxBanner>
              <PlayerBanner>
                <Player src={player}></Player>
              </PlayerBanner>
            </BoxBanner>
          </Banner>
          <Carrousel category={datosIniciales.categorias[0]} />
          <Carrousel category={datosIniciales.categorias[1]} />
          <Carrousel category={datosIniciales.categorias[2]} />
        </DefaultPage>
      </BrowserRouter>
    </>
  );
}

export default App;
