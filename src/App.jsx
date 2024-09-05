import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Internship from './components/Internship';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/skills' element={<Skills/>}/> 
        <Route path="/academics" element={<Academics/>}/>  
        <Route path="/internship" element={<Internship/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
