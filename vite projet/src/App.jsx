import { Route, Routes } from 'react-router';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import Navbar from './components/layout/Navbar';
import './index.css';


function App (){
  return(
    <>
<Navbar />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
     </Routes>
    </>
  )
}



export default App