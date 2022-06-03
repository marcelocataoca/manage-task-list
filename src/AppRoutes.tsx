import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link,
} from 'react-router-dom'
import { Login } from './pages/Login'
import { Catalog } from './pages/Catalog'
import { useState } from 'react'

export function AppRoutes(){
  const [logado, setLogado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}