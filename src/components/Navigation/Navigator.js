import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aboutus from './Aboutus'
import Blogs from './Blogs'
import Layout from './Layout'
import Contact from './Contact';
import Main from '../Main/main'

function Navigation(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="/Aboutus" element={<Aboutus/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Blogs" element={<Blogs/>}></Route>
            </Route>          
        </Routes>
        </BrowserRouter>
    );
    }
    
    export default Navigation;