/* eslint-disable react/prop-types */
import { useReducer, useEffect } from 'react';
import './style.css'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.val };
    default:
      return state;
  }
};

const CampoTexto = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '' });

  const { id, onInput } = props;
  const { value } = inputState;

  useEffect(() => {
    onInput(id, value);
  }, [id, onInput, value]);

  const changeHandler = (event) => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  };
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        name={props.name}
        style={ {backgroundColor : '#53585D', width: '1300px', color: '#E5E5E5', height:'47px', margin: '1em 2em'}}
      />
    ) : (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        style={ {backgroundColor : '#53585D', width: '1300px', color: '#E5E5E5', margin: '1em 2em', resize: 'none'}}

      />
    );

  return (
    <div>
      {element}
    </div>
  );
};

export default CampoTexto;
