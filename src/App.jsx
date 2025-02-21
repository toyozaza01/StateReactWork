import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import "./App.css";
import Survey from './pages/Survey';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/survey' element={<Survey/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
