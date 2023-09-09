/* eslint-disable react/prop-types */
const ButtonForm = ({tipo, titulo, styles, manejarClic}) => {
    return <button className='btn_form' type={tipo} 
        onClick={manejarClic}
        style={styles}>
           {titulo}
        </button>
}

export default ButtonForm