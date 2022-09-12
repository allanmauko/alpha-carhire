
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"
function Home({ cars }) {
    const navigate = useNavigate()
    const loadForm = () => {
        navigate('/form')
    }
  return (
    <div className='"container-fluid grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"'>
      {cars &&
        cars.map((car) => (
          <div className="card">
            <img src={car.image_url} className="card-image" />
            <div className="text-group" onClick={loadForm}>
              <p>model:&nbsp; {car.model}</p>
              <p>daily-rate:&nbsp; {car.daily_rate}</p>
              <p>weekly-rate:&nbsp; {car.weekly_rate}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home