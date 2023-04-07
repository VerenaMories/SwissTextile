import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Gallery from './Gallery/Gallery';
import GalleryHome from './Gallery/GalleryHome';
import Branch1 from './Gallery/Branch1';
import Branch2 from './Gallery/Branch2';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import Blog3 from './Blog/Blog3';
import Blog4 from './Blog/Blog4';
import Blog5 from './Blog/Blog5';
import Blog6 from './Blog/Blog6';
import Blog7 from './Blog/Blog7';
import Blog8 from './Blog/Blog8';
import Blog9 from './Blog/Blog9';

function App() {
  return (
  <>
  <div class="home-style-3">
    <div class="page-wrapper">
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/galleryHome' element={<GalleryHome/>}/>
    <Route path='/branch1' element={<Branch1/>}/>
    <Route path='/branch2' element={<Branch2/>}/>
<Route  path='/blog1' element={<Blog1/>}/>
<Route  path='/blog2' element={<Blog2/>}/>
<Route  path='/blog3' element={<Blog3/>}/>
<Route  path='/blog4' element={<Blog4/>}/>
<Route  path='/blog5' element={<Blog5/>}/>
<Route  path='/blog6' element={<Blog6/>}/>
<Route  path='/blog7' element={<Blog7/>}/>
<Route  path='/blog8' element={<Blog8/>}/>
<Route  path='/blog9' element={<Blog9/>}/>

  </Routes>
  <Footer/></div></div>
  </>
  );
}

export default App;
