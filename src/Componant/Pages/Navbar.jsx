// import { useState } from 'react';
import './Navbar.css';
// import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    // const [active, setActive] = useState(false);

    // const navToggle = () => {
    //     setActive(!active);
    //     active === "nav_menu" ?
    //         setActive('nav_menu nav_active') :
    //         setActive("nav_menu")

    // };



    return (
        <div className="navbar-container">
            <div className="navbar-inner-container">
                <div className="navbar-left-div">Portfolio</div>
                <div className="navbar-right-div">
                    <ul
                    // className={active ? 'nav_menu nav_active' : 'nav_menu'}
                    >
                        <li className="nav_item" >Home</li>
                        <li className="nav_item" >About</li>
                        <li className="nav_item">Service</li>
                        {/* <li className="nav_item" onClick={()=>navigate('./Header')}>Projects</li> */}
                        {/* <li className="nav_item" >Contact</li> */}
                        <div className="dropdown">
                            <button className="dropbtn">Services <IoIosArrowDown style={{ marginLeft: "10px" }} /></button>
                            <div className="dropdown-content">
                                <a href="#">Service 1</a>
                                <a href="#">Service 2</a>
                                <a href="#">Service 3</a>
                            </div>
                        </div>

                        <button className='nav_item_button'>Contact Us</button>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;
