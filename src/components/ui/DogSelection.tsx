import { useEffect, useState } from "react"
import { getAllBreeds, getByBreed, getRandomDog } from "../../crud/DogCrud"
import { Loader } from "./Loader"


export const DogSelection = () => {
    
    //Acá traemos todo y armamos el array de vuelta para poder guardar todo en un estado y volver a usarlo. 
    const [arrayBreeds, setArrayBreeds] = useState<string[]>([]) //hay que tipar el array por typescript, le decimos que el array va a ser un array de strings

    const [selectBreed, setSelectBreed] =useState('')

    const [dogImg, setDogImg] = useState ('')

    //estado para el loading
    const [loader, setLoader] = useState(false)

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
            (async()=>{
            setLoader(true)
            const response = await getRandomDog()
            setDogImg(response)
            setLoader(false)
            })()
        },
        [])
    useEffect(()=>{
        resolvedora()
    })
    
    //manejadora del botón
    const handleClick = async () =>{
        setLoader(true)
        const response = await getByBreed(selectBreed)
                setDogImg(response)
        setLoader(false)
    }
    return (


    <div className="border w-[450px] h-[500px] m-auto gap-1.5 bg-amber-900">
        <div className='h-[70%] w-full'>

            {loader ? <Loader></Loader> : <img src={dogImg.length > 1 ? dogImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s" } className='w-full h-full'></img>}
        </div>
        <div className="w-[80%] m-auto flex mt-10 h-[10%]">
            <select className="p-1 w-1/2  border bg-white " name="" id="" onChange={handleChange}  >
                <option value="">Select a breed</option>
                {arrayBreeds.map((breed)=>(
                    <option value={breed}>{breed}</option>
                ))} 
            </select>
        <button onClick={handleClick} className="w-[50%] h-full border rounded m-auto bg-amber-50 font-bold cursor-pointer active:scale-75">
                toca acá 😉
        </button>
        </div>
    </div>
    )
}
