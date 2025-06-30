import React, { useEffect, useState } from 'react'
import { getRandomDog } from '../../crud/DogCrud'
import { Loader } from './Loader'

export const RandomDog = () => {

    const [dogImg, setDogImg] = useState ('')
    //estado para el loader
    const [loader, setLoader] = useState(false)

    const handleClick = async ()=>{
        setLoader(true)
        const response = await getRandomDog()
        setDogImg(response)
        setLoader(false)
    }
    useEffect(()=>{
        (async()=>{
        setLoader(true)
        const response = await getRandomDog()
        setDogImg(response)
        setLoader(false)
        })()
    },
    [])


    return (
    <div className='border  w-[450px] h-[500px]  flex flex-col justify-center m-auto bg-amber-900'>
        <div className='h-[70%] w-full'>
            {loader ? <Loader></Loader> : <img src={dogImg.length > 1 ? dogImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s" } className='w-full h-full'></img>}
        </div>

        
        <button  className='border rounded w-[40%] m-auto bg-amber-50 font-bold cursor-pointer active:scale-75' onClick={handleClick}>
            Click to get a Random Dog
        </button>
        
    </div>
    )
}