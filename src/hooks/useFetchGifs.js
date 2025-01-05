import { useEffect, useState } from 'react';
import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	//* Función helper que realiza la petición a la API
	const getImages = async () => {
		const newImages = await getGifs(category);

		//* Actualizamos y cargamos las imagenes
		setImages(newImages);

		//* Actualizamos el loader para quitarlo
		setIsLoading(false);
	};

	//* El use effect es para lograr tener un efecto secundario sobre alguna acción en este caso la función, el segundo argumento espera que este detecte el cambio, si esta en vacio este solo será ejecutado una sola vez []
	//! Importante - El useEffect nunca va a aceptar una función async, es mejor mandar llamar otra función
	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading,
	};
};
