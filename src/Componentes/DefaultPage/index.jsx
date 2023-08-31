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

const DefaultPage = (props) => {
  const home = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Header>
        <Logo src={logotipo} alt="Logo Aluraflix" onClick={home}></Logo>
        <Boton
          $colorFondo={botonNuevoVideoBackground}
          $borde={botonNuevoVideoBorder}>
          Nuevo Video
        </Boton>
      </Header>
      <div>{props.children}</div>
      <Footer>
        <Logo src={logotipo} alt="Logo Aluraflix"></Logo>
      </Footer>
    </>
  );
};

export default DefaultPage;
