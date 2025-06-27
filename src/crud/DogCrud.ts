import axios from "axios"

//Endpoints
const BASE_URL = 'https://dog.ceo/api/breeds/image/random'
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

//get

export const getRandomDog= async () : Promise<string> => {

    const response = await axios.get(BASE_URL)
    if (response.data.status !== "success" )
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s'
    else{
        return response.data.message
    }
}

//get breeds
export const getAllBreeds = async () : Promise<string[]> =>{

    try {
        const arrayBreeds : string[] = []; //array para almacenar las claves que luego usaremos con el endpoint de las razas mandandole esa clave y devolviendonos un valor, o sea un perro especifico
        const response = await axios.get(BREEDS_URL)
    
        //for para obtener las keys y guardarlas en el array
        for (const [key] of Object.entries(response.data.message)){
            arrayBreeds.push(key)
        }
        console.log(arrayBreeds)
        return arrayBreeds;

    } catch (error) {
        console.log(error)
        console.error("Error fetching breeds", error)
        return []; 
    }
}

// Get random pet by breed
export const getByBreed = async (breed: string) : Promise<string> =>{
    try {

        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        return response.data.message

    } catch (error) {
        console.log(error)
        console.error("Error fetching breeds", error)
        return ""; 
    }
}




//las funciones asincronas tienen que esperar una respuesta, por eso siempre va Promise cuando tipamos la función,
//tipamos la promesa = Promise<acá_va_lo_que_devuelve>, lo que va a devolver, que va a ser lo que tipamos en la interface,
//  o puede ser otra cosa. Adentro cuando hacemos el fetch, ponemos un await porque es una promesa que esperamos que se resuelva
//

