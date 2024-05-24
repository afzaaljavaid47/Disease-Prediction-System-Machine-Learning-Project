import {useState} from 'react'
import { Link } from "react-router-dom";
import "./Profile.scss";
import avatar from '../../assets/profile.png'
const Profile = () => {
  const [file, setFile] = useState();
  const onUpload =async (e) =>{
    const file =await( e.target.files[0]);
    setFile(file);
  }
  return (
    <div className="proffile">
      <div className="card">
        <div className="left">
          <span>Back to Home...</span>
          <Link to='/'>
          <button>Home</button>
          </Link>
        </div>
        <div className="right">

          <h1>Profile</h1>
          <form>
          <div className='profilePic'>
                  <label htmlFor="profile">
                    <img src={file || avatar}  alt="avatar" />
                  </label>       
                  <input type="file" onChange={onUpload} id='profile'/>
              </div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Password" />
           
            <button>Update</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
