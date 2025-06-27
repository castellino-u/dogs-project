import { useEffect, useState } from "react"
import { getAllBreeds, getByBreed } from "../../crud/DogCrud"


export const DogSelection = () => {
    
    //Acá traemos todo y armamos el array de vuelta para poder guardar todo en un estado y volver a usarlo. 
    const [arrayBreeds, setArrayBreeds] = useState<string[]>([]) //hay que tipar el array por typescript, le decimos que el array va a ser un array de strings

    const [selectBreed, setSelectBreed] =useState('')

    const [dogImg, setDogImg] = useState ('')
    //Fin Resolvedora: resolver promesas 
    
    const resolvedora =  async ()=>{
        const response = await getAllBreeds()
        setArrayBreeds(response)
        console.log(response)

    }
    //funcion que maneja el evento
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectBreed(e.target.value)
    }

    //useEffect() para que se monte al cargar la página
    useEffect(()=>{
        resolvedora()
        
    },
    [])

    //manejadora del botón
    const handleClick = async () =>{
        const response = await getByBreed(selectBreed)
                setDogImg(response)
    }
    return (


    <div >
        <div className='h-[70%] w-full'>
            <img className=' h-full w-full ' src={dogImg.length > 0 ? dogImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"} alt="dog image" />
        </div>
        <select name="" id="" onChange={handleChange} >
            {arrayBreeds.map((breed)=>(
            <option value={breed}>{breed}</option>
            ))} 
        </select>
        <button onClick={handleClick} className="border ">
            toca acá 😉
        </button>
    </div>

    
    )
}
