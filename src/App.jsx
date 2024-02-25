import { BrowserRouter, Routes,Route } from "react-router-dom";

import Header from './Components/Header'
import { Home, Login, Oauth } from "./pages/index.js";
import './App.css'



function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/oauth" exact Component={Oauth}/>
        </Routes>
        {/* TODO: footer ? */}
      </BrowserRouter>
  )
}

export default App
