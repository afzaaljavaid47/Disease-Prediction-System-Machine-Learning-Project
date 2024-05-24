import './Header.scss'
import { Link } from 'react-router-dom'
// Import Hero Image
import hero from '../../assets/hero.png'
const Header = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className="left">
            <h1 className='heading'>HealthCare System</h1>
            <p>HealthCare System will give you the best Healthcare benefits </p>
            <Link to='/login'>
            <button>
                Learn more
            </button>
            </Link>
        </div>
        <div className="right">
            <img src={hero} alt="Hero_image" />
        </div>
        </div>  

    </section>
  )
}

export default Header