import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="left">
                <h2>SMHEALTHCARE</h2>
            </div>
            <div className="left-center">
                <h3>Prediction</h3>
                <p>Heart Disease</p>
                <p>Diabetes Disease</p>
                <p>Disease Details</p>
            </div>
            <div className="right-center">
                <h3>Recommendation</h3>
                <p>Diet Plan</p>
                <p>BMI Calculator</p>
                <p>Diet Details</p>
            </div>
            <div className="right">
                <h3>Contact Us</h3>
                <p>Email: smhealthcare@gmail.com</p>
                <p>Phone: +91 999999999</p>
                <p>Website: www.smhealthcare.com</p>
                <p>LinkedIn: smhealthcare@linkedin.com</p>
            </div>
           
        </div>
        {/* <div className="bottom">
                <p>Copyright &copy; 2023 SMHEALTHCARE. All Rights Reserved.</p>
            </div> */}
    </div>
  )
}

export default Footer