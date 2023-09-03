/* eslint-disable react/prop-types */
import './tabla.css'
const TablaCategorias = ({
  categorias
}) => {

  return (
    <table>
      <thead >
        <tr>
          <td>Nombre</td>
          <td>Descripción</td>
          <td>Editar</td>
          <td>Remover</td>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria, i) => {
          return (
            <tr key={i}>
              <td>{categoria.titulo}</td>
              <td>{categoria.descripcion}</td>
              <td className='edrem'>Editar</td>  
              <td className='edrem'>Remover</td>  
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaCategorias;
