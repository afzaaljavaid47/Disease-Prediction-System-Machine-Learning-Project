import './Navbar.scss'
import { Link } from 'react-router-dom';
// Profile Image
import avatar from '../../assets/profile.png'
// Import Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {
  const {toggle, darkMode} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="left">
        <span>HEALTH CARE</span>
        <Link to='/' style={{textDecoration:"none"}}>    
        <HomeOutlinedIcon />
        </Link>
       { darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle}/>}
        <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder='Search...'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar