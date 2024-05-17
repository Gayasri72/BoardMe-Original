import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import Events from './pages/Events'
import Spaces from './pages/Spaces'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/spaces' element={<Spaces/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/services' element={<Services/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App