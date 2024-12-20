import { Route, Routes } from 'react-router';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import './index.css';

function App (){
  return(
    <>
     <Route>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
     </Route>
    </>
  )
}



export default App