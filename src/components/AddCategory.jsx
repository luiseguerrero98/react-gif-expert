import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evento) => {
        //el input aqui recibe del onChange un valor evento por defecto, recordemos que cuando en algún método
        //nos retorna algo, podemos usar una función de flecha para hacer algo con el retorno
        //en el caso de onChange = {(evento) => onInputChange(evento)} se puede simplificar, porque sabemos que 
        //lo que se mandará es el mismo evento a la función y no habrá cambio alguno, se reduce nada mas a como está
        //abajo
        setInputValue(evento.target.value);
    }

    const onSubmit = (evento) => {
        evento.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value = {inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}