import  { useState } from 'react'

//react-hook-form 
// ahora toca  13video 13

export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm);
    
    //   const { username, email, password } = formState;
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value, //estamos buscando por el nombre, el [nombre] tendra el valor value
        });
        // console.log({name, value})
      };

      const onResetForm=()=>{
        setFormState(initialForm)
      }
    


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}
