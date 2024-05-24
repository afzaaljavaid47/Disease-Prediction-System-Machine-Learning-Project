import './Leftbar.scss'
// Import Images
import avatar from '../../assets/profile.png'
import heart from '../../assets/heat.png'
import recommend from '../../assets/recommend.png'
import disease from '../../assets/disease.png'
import diabete from '../../assets/diabete.png'
import bmi from '../../assets/bmi.png'
import logout from '../../assets/logout.png'
import { Link } from 'react-router-dom'

const Leftbar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
        <div className="user">
        <img src={avatar} alt="avatar" />
          <Link to='/profile' style={{textDecoration:'none'}} >
          <span>User Name</span>
        </ Link>
        </div>
        <hr />
        <div className="item">
          <img src={heart} alt="prediction image" />
          <Link to='/heart-prediction' style={{textDecoration:'none'}}>
          <span>Heart Prediction</span>
          </Link>
        </div>
        <div className="item">
          <img src={diabete} alt="diabetes image" />
          <Link to='/diabetes-prediction' style={{textDecoration:'none'}}>
          <span>Gestational Diabetes</span>
          </Link>
        </div>
        <div className="item">
          <img src={diabete} alt="recommend image" />
          <Link to='/recommendation' style={{textDecoration:'none'}}>
          <span>Diabetes</span>
          </Link>
        </div>
        <div className="item">
          <img src={disease} alt="disease image" />
          <Link to='/diseasedetail' style={{textDecoration:'none'}}>
          <span>Details</span>
          </Link>
        </div>
        <div className="item">
          <img src={bmi} alt="bmi image" />
          <Link to='/bmi' style={{textDecoration:'none'}}>
          <span>BMI Calculator</span>
          </Link>
        </div>
        <hr />
        </div>
      </div>
    </div>
  )
}

export default Leftbar