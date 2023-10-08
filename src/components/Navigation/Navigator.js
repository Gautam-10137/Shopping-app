
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Aboutus from './Aboutus'
import Blogs from './Blogs'
import Layout from './Layout'
import Contact from './Contact';


function Navigation(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Aboutus" element={<Aboutus/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Blogs" element={<Blogs/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    );
    }
    
    export default Navigation;