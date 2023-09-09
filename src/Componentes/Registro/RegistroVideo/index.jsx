/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CampoTexto from '../../CampoTexto'; //our Reusable component
import '../../../index.css';
import { enviarDatos } from '../../../../server/server';
import { v4 as uuidv4 } from "uuid"
import ListadoCategorias from '../../ListadoCategorias';
import TextArea from '../../TextArea';
import ButtonForm from '../../Button/ButtonForm';
import ButtonLink from '../../Button/ButtonLink';
import DefaultPage from '../../DefaultPage';

const RegistroVideo = () => {
    const[nombre,setNombre] = useState('')
    const[urlVideo,setUrlVideo] = useState('')
    const[urlImagen,setUrlImagen] = useState('')
    const[categoria,setCategoria] = useState('')
    const[descripcion,setDescripcion] = useState('')
    const[codigoSeguridad,setCodigoSeguridad] = useState('')

  const submitHandler = (e) => {
       e.preventDefault()
        const id = uuidv4()
        let datosAEnviar = {
            nombre,
            urlVideo,
            urlImagen  : 'https://fakeimg.pl/500x300/?text=AluraFlix&font=roboto',
            descripcion,
            categoria,
            codigoSeguridad,
            id
        }
        enviarDatos('/videos',datosAEnviar)
        limpiarForm()
  };

     const limpiarForm = () => {
        setNombre('')
        setUrlVideo('')
        setUrlImagen('')
        setCategoria('Seleccione una categoria')
        setDescripcion('')
    }

     const EstilosBtnNuevaCategoria = {
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

 return (
        <DefaultPage>
            <main className="nuevovideo">
                <div className="container">
                    <h2 className="nuevovideo__titulo">Nuevo Video</h2>
                    
                    <form className='form' action="" onSubmit={submitHandler}>
                        
                        <CampoTexto 
                            titulo='Título'
                            mensaje="" 
                            required={true} 
                            valor={nombre} 
                            actualizarValor={setNombre} 
                        />
                        
                        <CampoTexto 
                            titulo='Link del video' 
                            mensaje="" 
                            required={true} 
                            valor={urlVideo} 
                            actualizarValor={setUrlVideo} 
                        />

                        <CampoTexto 
                            titulo='Link de la imagen del video' 
                            mensaje="" 
                            required={true} 
                            valor={urlImagen} 
                            actualizarValor={setUrlImagen} 
                        />

                        <ListadoCategorias
                            titulo='Categoría' 
                            mensaje="" 
                            required={true} 
                            valor={categoria} 
                            actualizarValor={setCategoria} 
                        />

                        <TextArea
                            titulo='Descripción' 
                            mensaje='' 
                            required={true} 
                            valor={descripcion} 
                            actualizarValor={setDescripcion} 
                        />

                        <CampoTexto 
                            titulo='Código de seguridad' 
                            mensaje="" 
                            required valor={codigoSeguridad}
                            actualizarValor={ setCodigoSeguridad } 
                        />

                         <div className="barra__botones">
                            <div className="botones">
                                <ButtonForm tipo='submit' titulo='Guardar' styles={EstilosBtnGuardar} />
                                <ButtonForm tipo='reset' titulo='Limpiar' styles={EstilosBtnLimpiar} manejarClic={()=>limpiarForm()}/>
                            </div>
                            <ButtonLink to='/categoria' titulo='Nueva Categoría' styles={EstilosBtnNuevaCategoria}/>
                        </div>

                    </form>

                </div>
            </main>
        </DefaultPage>
        
        
        
    )
};

export default RegistroVideo;
