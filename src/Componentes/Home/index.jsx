import GlobalStyle from '../../GlobalStyle';
import DefaultPage from '../DefaultPage';
import Carrousel from '../Carrousel/Carrousel';
import datosIniciales from '../../../Data/datos-iniciales.json';
import BannerMain from '../BannerInicial';

const Home = () => {
    return (
         <>
      <GlobalStyle />
        <DefaultPage>
          <BannerMain />
          <Carrousel category={datosIniciales.categorias[0]} />
          <Carrousel category={datosIniciales.categorias[1]} />
          <Carrousel category={datosIniciales.categorias[2]} />
        </DefaultPage>
    </>
    )
}

export default Home;