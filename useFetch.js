import  { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  // Función para resetear el estado de carga
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    // Si la URL ya está en caché, usamos los datos guardados
    if (localCache[url]) {
      console.log('Usando cache');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    // Indicamos que estamos esperando una respuesta
    setLoadingState();

    // Realizamos la solicitud fetch
    const resp = await fetch(url);

    // Verificamos si la respuesta fue exitosa (status 200-299)
    if (!resp.ok) {
      // Si la respuesta no es exitosa, actualizamos el estado de error
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    // Si la respuesta fue exitosa, procesamos los datos
    const data = await resp.json();

    // Actualizamos el estado con los datos recibidos y almacenamos en cache
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Guardamos los datos en el cache para futuras consultas
    localCache[url] = data;
  };

  // UseEffect que ejecuta la función getFetch cuando la URL cambia
  useEffect(() => {
      getFetch();

  }, [url]); // Dependencia: se ejecuta cada vez que cambia la URL

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
