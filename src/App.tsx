import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Layout from './components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Layout>
    <Routes>
      <Route path="/" element={< Dashboard/>} />
    </Routes>
   </Layout>
    </BrowserRouter>
  )
}

export default App
