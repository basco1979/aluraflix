import GlobalStyle from '../../GlobalStyle';
import DefaultPage from '../DefaultPage';
import Carrousel from '../Carrousel/Carrousel';
import BannerMain from '../BannerInicial';

const Home = () => {
    return (
         <>
      <GlobalStyle />
        <DefaultPage>
          <BannerMain />
          <Carrousel />
        </DefaultPage>
    </>
    )
}

export default Home;