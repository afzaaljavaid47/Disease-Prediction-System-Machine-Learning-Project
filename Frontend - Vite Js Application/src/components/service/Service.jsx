import {Link} from 'react-router-dom'
import "./Service.scss";
import Card from "../../components/card/Card";
import data from "../../data";
const Service = () => {
  return (
    <div className="service">
     
      <div className="container">
        <h1 className="service">Our Service</h1>
        <hr />
        <Card key={data.id}  />
        <Link to='/diseasedetail'>
        <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
