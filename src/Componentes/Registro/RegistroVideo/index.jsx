/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Boton from '../../Button';
import CampoTexto from '../../CampoTexto'; //our Reusable component
import DefaultPage from '../../DefaultPage';
import { useForm } from '../../Hooks/form-hooks';


const RegistroVideo = (props) => {
  const [formState, inputHandler] = useForm({
    titulo: { value: '' },
    link: { value: '' },
    imagen: { value: '' },
    categoria: { value: '' },
    descripcion: { value: '' },
    codigo: { value: '' },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const [titulo, setTitulo] = useState('');
  const [link, setLink] = useState('');
  const [imagen, setImagen] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [codigo, setCodigo] = useState('');


  return (
    <>
      <DefaultPage>
        <h1 style={{ textAlign: 'center', color: '#FFFFFF', margin: '1em 0' }}>
          Nuevo Video
        </h1>
        <form onSubmit={submitHandler}>
          <CampoTexto
            id="titulo"
            element="textarea"
            type="text"
            placeholder="Titulo"
            rows="3"
            onInput={inputHandler}
          />
          <CampoTexto
            id="link"
            element="textarea"
            type="text"
            placeholder="Link del video"
            rows="3"
            onInput={inputHandler}
          />
          <CampoTexto
            id="imagen"
            element="textarea"
            type="text"
            placeholder="Link Imagen del Video"
            onInput={inputHandler}
          />
          
          <CampoTexto
            id="descripcion"
            element="textarea"
            type="text"
            placeholder="Descripcion"
            onInput={inputHandler}
          />
          <CampoTexto
            id="codigo"
            element="textarea"
            type="text"
            placeholder="Codigo de Seguridad"
            rows="3"
            onInput={inputHandler}
          />
          <div style={{ marginLeft: '1em' }}>
            <Boton $colorFondo="#2A7AE4" $colorTexto="#FFFFFF" $borde="#2A7AE4">
              Guardar
            </Boton>
            <Boton $colorFondo="#9E9E9E" $colorTexto="#000000" $borde="#9E9E9E">
              Limpiar
            </Boton>
          </div>
        </form>
      </DefaultPage>
    </>
  );
};

export default RegistroVideo;
