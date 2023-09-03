import Home from './Componentes/Home';
import RegistroCategoria from './Componentes/Registro/RegistroCategoria';
import RegistroVideo from './Componentes/Registro/RegistroVideo';
import GlobalStyle from './GlobalStyle'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Page404 from './Page404';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
        <Route path="/aluraflix" element={<Home />}></Route>
        <Route path="/aluraflix/categoria" element={<RegistroCategoria />}/>
        <Route path="/aluraflix/video" element={<RegistroVideo />}/>
        <Route path='*' element={<Page404/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
