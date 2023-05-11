import './App.css'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </>
  )
}

export default App
