/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Boton from '../../Button';
import CampoTexto from '../../CampoTexto'; //our Reusable component
import DefaultPage from '../../DefaultPage';
import { useForm } from '../../Hooks/form-hooks';
import TablaCategorias from '../../TablaCategorias';
import datosIniciales from '../../../../Data/datos-iniciales.json';


const RegistroCategoria = (props) => {
  const [formState, inputHandler] = useForm({
    nombre: { value: '' },
    description: { value: '' },
    color: { value: '' },
    codigo: { value: '' },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [color, setColor] = useState('');
  const [codigo, setCodigo] = useState('');
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [solicitarDatos, setSolicitarDatos] = useState(false);

  const manejarEditar = (id, nombre, descripcion, color, codigo) => {
    const formulario = document.querySelector('form');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    //formulario.scrollIntoView({ behavior: "smooth" });

    setNombre(nombre);
    setDescripcion(descripcion);
    setColor(color);
    setCodigo(codigo);
  };

  return (
    <>
      <DefaultPage>
        <h1 style={{ textAlign: 'center', color: '#FFFFFF', margin: '1em 0' }}>
          Nueva Categoría
        </h1>
        <form onSubmit={submitHandler}>
          <CampoTexto
            id="nombre"
            element="textarea"
            type="text"
            placeholder="Nombre"
            rows="3"
            onInput={inputHandler}
          />
          <CampoTexto
            id="descripcion"
            element="textarea"
            type="text"
            placeholder="Descripción"
            rows="8"
            onInput={inputHandler}
          />
          <label
            htmlFor="color"
            style={{
              marginLeft: '2.5em',
              color: '#FFFFFF',
              fontSize: '12px',
              verticalAlign: 'bottom',
            }}>
            Color
          </label>
          <CampoTexto
            id="color"
            name="color"
            element="input"
            type="color"
            placeholder="Color"
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
          <TablaCategorias
          categorias={datosIniciales.categorias}
          />
      
      </DefaultPage>
    </>
  );
};

export default RegistroCategoria;
