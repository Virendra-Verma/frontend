import React, { useState } from 'react'
import laptopData from './dummyData.js'

const Browser = () => {
    const [laptopList, setLaptopList]=useState(laptopData);
    const displayLaptopData = () => {
        if(laptopList.length==0){
            return <h1 className='text-center'>No Data Found</h1>
        }
    
        return laptopList.map((laptop) => (
            <div className='col-md-3'>
                <div className="card">
                    <img src={laptop.Image} alt="" />
                    <div className='card-body'>
                        <h4>{laptop.title}</h4>
                        <p>{laptop.rating} Avg Rating</p>
                        <p>{laptop.reviews} Reviews</p>
    
                        <h2>₹{laptop.price}</h2>
                    </div>
                </div>
            </div>
        ))

    const filterLaptop=(e)=>{
        const value = e.target.value;
        setLaptopList(laptopData.filter((laptop)=>{return laptop.toLowercase().includes(value.toLowercase())}));
    }
      }
  return (
    <div>
     <header className='container'>
        <div className='containet py-5'>
        <p className='display-2 text-center fw-bold'>Browse Laptop</p>
        <input type='text' className='form-control w-75 m-auto'/>
        </div>
     </header>
     <div className='container'>
        <div className='row'>{displayLaptopData()}</div>
     </div>
    </div>
  )
}

export default Browser;
