import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Form from "./components/Form";

function App() {
  // State lives here !!
  const [cars, setCars] = useState([])

  // function to fetch data
  useEffect(() => {
    const getCars = async () => {
      const response = await fetch("https://alpha-car-backend.herokuapp.com/cars")
      const data = await response.json()
      setCars(data)
    }
  getCars()
  
  }, [])
  
  return (
    <div className="App bg-gray-300">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
