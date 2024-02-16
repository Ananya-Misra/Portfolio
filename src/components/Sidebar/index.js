import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faHome, faBriefcase, faLightbulb, faComments} from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assets/images/image3.png'
const Sidebar=()=>
(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            
            {/* <img className="sub-logo" src={LogoSubtitle} alt="ananya"/> */}

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faComments} color="#4d4d4e"/>
            </NavLink>
        </nav>
        </div> 
)
export default Sidebar