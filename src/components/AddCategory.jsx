import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		// console.log(event.target.value);
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;

		//* Cuando no tenemos el primer valor o valor inicial para actualizar, debemos ocupar dentro del setCategories una funcion de flecha y el primer argumento siempre será el valor primero
		// setCategories((categories) => [inputValue, ...categories]);
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	//* Para poder cambiar el valor de un input es necesario siempre conciderar el evento onChange para así reconocer el cambio
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar gifs'
				value={inputValue}
				// Es necesario pasar el evento para el value pueda cambiar
				// El evento se puede pasar sin necesidad del arrow function
				onChange={onInputChange}
			/>
		</form>
	);
};
