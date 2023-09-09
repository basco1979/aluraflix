/* eslint-disable react/prop-types */
import Boton from '../Button/index.jsx';
import Header from '../Header';
import Logo from '../Logo';
import {
  botonNuevoVideoBorder,
  botonNuevoVideoBackground,
} from '../UI/variables';
import logotipo from '../../assets/logotipo.png';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const DefaultPage = (props) => {
  const home = () => (window.location.href = '/');
  const url = useLocation();
  return (
    <>
      <Header>
        <Logo src={logotipo} alt="Logo Aluraflix" onClick={home}></Logo>
        { url.pathname === '/aluraflix/' && (
          <Boton
            $colorFondo={botonNuevoVideoBackground}
            $borde={botonNuevoVideoBorder}
            onClick={() => (window.location.href = '/aluraflix/video')}>
            Nuevo Video
          </Boton>
        )}
      </Header>
      <div>{props.children}</div>
      <Footer>
        <Logo src={logotipo} alt="Logo Aluraflix"></Logo>
      </Footer>
    </>
  );
};

export default DefaultPage;