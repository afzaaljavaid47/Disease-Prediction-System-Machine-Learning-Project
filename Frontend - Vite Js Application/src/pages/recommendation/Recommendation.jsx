import { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast'
import '../diabetes/Diabetes.scss'
import '../recommendation/Recommendation.scss'

const Diabetes = () => {

  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [bloodPressure, setBloodPressure] = useState("")
  const [skinThickness, setSkinThickness] = useState("")
  const [insulin, setInsulin] = useState("")
  const [bmi, setBmi] = useState("")
  const [glucose, setGlucose] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState({});

  const validateForm = () => {
    let err = {}
    // const regex = /^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/
    // const regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    if (gender == '' || age == '' || bloodPressure == '' || skinThickness == '' || insulin == '' || bmi == '' || glucose == '') {
      err =toast.error("Please fill all the fields!")
    } 

    else if( age == 0){
      err = toast.error("Age cannot be zero...!")
    }
    // else if (bloodPressure.bloodPressure > 50 && bloodPressure.bloodPressure < 200) {
    //   err.bloodPressure = toast.error("Please Enter Blood Pressure in Range!")
    // } else if (skinThickness >= 10 && skinThickness <= 24) {
    //   err.skinThickness = toast.error("Please Enter Skin Thickness in Range!")
    // } else if (insulin >= 2 && insulin <= 25) {
    //   err.insulin = toast.error("Please Enter Insulin in Range!")
    // } else if (bmi >= 15 && bmi <= 30) {
    //   err.bmi = toast.error("Please Enter BMI in Range!")
    // } else if (glucose >= 1 && glucose <= 10) {
    //   err.glucose = toast.error("Please Enter Glucose in Range!")
    // }
    setError({ ...err })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    axios.post('http://localhost:5000/recommendation', {
      gender: gender,
      age: age,
      bloodPressure: bloodPressure,
      skinThickness: skinThickness,
      insulin: insulin,
      bmi: bmi,
      glucose: glucose,
    })
    .then((res) => {
        setResult(res.data.result === 1
          ?
          <span className='s' style={{ color: "red" }}>Patient has a risk of Diabetes 😢</span>
          :
          <span className='s' style={{ color: "greenyellow" }}>Patient has No risk of Diabetes 😀</span>
        );
      })
      .catch((error) => {
        console.log("Error",error)
      })
  }

  return (
    <div className='diabetes-prediction'>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <h1>Diabetes Prediction</h1>
      <h5>Please enter the patient details</h5>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Form-group">
              <label htmlFor="gender">Gender</label>
              <input type="number" value={gender} onChange={(event) => setGender(event.target.value)} placeholder="eg. 1 male 2 female" />
              {/* <label>{error.gender}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="age">Age</label>
              <input type="number" value={age} onChange={(event) => setAge(event.target.value)} name="age" placeholder="eg. 20" />
              {/* <label>{error.age}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="bloodpressure">Blood Pressure</label>
              <input type="number" value={bloodPressure} onChange={(event) => setBloodPressure(event.target.value)} name="bloodpressure" placeholder="140/90 mmHg or below" />
              {/* <label>{error.bloodPressure}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="skinthickness">Skin Thickness</label>
              <input type="number" value={skinThickness} onChange={(event) => setSkinThickness(event.target.value)} name="skinthickness" placeholder="23.6 +- 7.5 mm" />
              {/* <label>{error.skinThickness}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="insulin">Insulin Level</label>
              <input type="number" value={insulin} onChange={(event) => setInsulin(event.target.value)} name="insulin" placeholder="2-25 uIU/mL" />
              {/* <label>{error.insulin}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="bmi">Body Mass Index</label>
              <input type="number" value={bmi} onChange={(event) => setBmi(event.target.value)} name="bmi" placeholder="18-25 kg/m^2" />
              {/* <label>{error.bmi}</label> */}
            </div>
            <div className="Form-group">
              <label htmlFor="glucose">Glucose</label>
              <input type="number" value={glucose} onChange={(event) => setGlucose(event.target.value)} name="glucose" placeholder="0.078-2.42" />
              {/* <label>{error.glucose}</label> */}
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Predict</button>
          </fieldset>
        </form>

        <div className="display">
          {result && (
            <div>
              <h2 className='predic'>Prediction Result:</h2>
              <p>{result}</p>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Diabetes