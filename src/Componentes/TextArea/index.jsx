/* eslint-disable react/prop-types */
const TextArea = ({titulo, required, error, valor, actualizarValor}) => {

    const handleChange = (e) => {
        console.log('cambio',e.target.value)
        actualizarValor(e.target.value)
    }

    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="descripcion" >{titulo}</label>
                <textarea 
                    name="descripcion" 
                    id="descripcion" 
                    cols="30" rows="4"
                    required={required}
                    value={valor}
                    onChange={handleChange}>
                </textarea>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    );
}

export default TextArea