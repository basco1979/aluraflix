/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { obtenerDatos } from "../../../server/server"

const ListadoCategorias = ({titulo, required, error, valor, actualizarValor}) => {
    
    const [categorias,setCategorias] = useState([])

    useEffect(()=>{
        obtenerDatos('/categorias',setCategorias)
    },[])

    const handleChange = (e) => {
        actualizarValor(e.target.value)
    }
    
    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="categoria">{titulo}</label>
                <select name="categoria" id="categoria" required={required} value={valor} onChange={handleChange}>
                    <option value="" disabled defaultValue='' hidden>** Escoja una categoria **</option>
                    {
                        categorias.map((categoria, i) => {
                            return(
                                <option value={categoria.nombre} key={i}>{categoria.nombre}</option>
                            )
                        })
                    }
                </select>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    )
}

export default ListadoCategorias