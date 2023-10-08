import {Outlet, Link} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <nav>
            <div className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Aboutus">About</Link>
                </li>

            </ul>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;