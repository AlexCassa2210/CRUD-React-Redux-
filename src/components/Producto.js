import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();
    const navigate = useNavigate(); //Habilitar history para redirección

    //Confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {
        //Pregunar al usuario
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                //Pasarlo al action
                dispatch( borrarProductoAction(id) );

            }
          });

    }

    //Función que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditar(producto) );
        navigate(`/productos/editar/${producto.id}`);
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'>$ {precio} </span></td>
            <td className='acciones'>
                <button 
                type='button'
                onClick={() => redireccionarEdicion(producto)}
                className='btn btn-primary mr-2'
                >Editar</button>
                <button
                type='button'
                className='btn btn-danger'
                onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>  
            </td>
        </tr>
     );
}
 
export default Producto;