/* eslint-disable react/prop-types */
import { eliminarDatos, obtenerDatos } from '../../../../server/server';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import '../../../index.css'

const VideoCards = ({ color, nombreCategoria }) => {
    const [videos,setVideos] = useState([])
    const [videoAEliminar,setVideoAEliminar] = useState(null)
    const [solicitarDatosVideos,setSolicitarDatosVideos] = useState(false)

    useEffect(()=>{
        obtenerDatos('/videos', setVideos)
        setSolicitarDatosVideos(false)
    },[solicitarDatosVideos])



    let colorCard = {
        border: `2px solid ${color}`, 
        backgroundColor: `${color}`   
    }



    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = (id) => {
        setVideoAEliminar(id)
        setModalIsOpen(true);
        
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setVideoAEliminar(null)
    };


    const manejarEliminar = ()=>{
        if(videoAEliminar !== null){
            eliminarDatos(videoAEliminar)
            setSolicitarDatosVideos(true)
        }
        closeModal(); 
    }

    return (
        <>
            {
                videos.map(video => {
                    const { id, urlVideo, urlImagen, categoria } = video
                    if(categoria === nombreCategoria){
                        return (
                        <div className='videocard_container' key={id}>
                            <button className='videocard_btn' onClick={() => openModal(`/videos/${id}`)}>X</button>
                        <Link to={`${urlVideo}`} target="_blank" rel="noopener noreferrer" >
                            
                            <div className='videocard' style={ colorCard } key={id}>
                                <img src={`${urlImagen}`} alt="Imagen video card" key={id}/>
                                
                            </div>
                        </Link>
                        </div>
                        
                        );
                    }   
                })
            }
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Ejemplo de Modal"
            >   
                <div className='modal_header'>
                    <button className='btn_cancel' onClick={closeModal}>X</button>
                </div>
                <div className='modal_content'>
                    <h2>Eliminar Video</h2>
                    <p>Se dispone a eliminar el video, desea continuar?</p>
                </div>
                
                <div className='Modal_footer'>
                    <button className='modal_btn modal_btn-ok' onClick={manejarEliminar}>Eliminar Video</button>
                    <button className='modal_btn modal_btn-no' onClick={closeModal}>Cancelar</button>
                </div>
            </Modal>
        </>
        
    )
}

export default VideoCards