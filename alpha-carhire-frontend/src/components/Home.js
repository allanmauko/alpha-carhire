
import React from 'react'
import "./Home.css"
function Home({cars}) {
    
  return (
      <div className='main-container'>
          {
              cars && cars.map((car) => (
               <div className='card'>
              <img src={car.image_url} className='card-image'/>  
              
              <div className='text-group'>
                          <p>{car.model}</p>
                          <p>{car.daily_rate}</p>
                          <p>{car.weekly_rate}</p>
              </div> 
              </div>    
              ))
             
          }
          
    </div>
  )
}

export default Home