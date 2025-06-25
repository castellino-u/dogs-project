import React, { useState } from 'react'
import { getRandomDog } from '../../crud/DogCrud'

export const RandomDog = () => {

    const [dogImg, setDogImg] = useState ('')

    const handleClick = async ()=>{
        const response = await getRandomDog()
        setDogImg(response)
    }


    return (
    <div className='border  w-[450px] h-[500px]  flex flex-col justify-center'>
        <div className='h-[70%] w-full'>
            <img className=' h-full w-full ' src={dogImg.length > 0 ? dogImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"} alt="dog image" />
        </div>

        
            <button  className='border rounded w-[30%] m-auto ' onClick={handleClick}>
                Random Dog
            </button>
        
    </div>
    )
}
