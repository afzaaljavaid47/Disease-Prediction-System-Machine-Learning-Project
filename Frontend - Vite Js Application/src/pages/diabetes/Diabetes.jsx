import { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import './Diabetes.scss'

const Diabetes = () => {
  const [pregnancies, setPregnancies] = useState("")
  const [glucose, setGlucose] = useState("")
  const [bloodPressure, setBloodPressure] = useState("")
  const [skinThickness, setSkinThickness] = useState("")
  const [insulin, setInsulin] = useState("")
  const [bmi, setBmi] = useState("")
  const [diabetesPedigreeFunction, setdiabetesPedigreeFunction] = useState("")
  const [age, setAge] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState({})

  const validateForm = () => {
    let err = {}
    // const regex = /^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/
    // const regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    if (pregnancies == '' || glucose == '' || bloodPressure == '' || skinThickness == '' || insulin == '' || bmi == '' || diabetesPedigreeFunction == '' || age == '') {
      err =toast.error( "Please fill all the fields!")
    } else if(age == 0){
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
    setResult("");
    event.preventDefault();
    const isValid = validateForm();
    console.log(isValid)
    axios.post('http://localhost:5000/diabetes-prediction', {
      pregnancies: pregnancies,
      glucose: glucose,
      bloodPressure: bloodPressure,
      skinThickness: skinThickness,
      insulin: insulin,
      bmi: bmi,
      diabetesPedigreeFunction: diabetesPedigreeFunction,
      age: age
    })
      .then((res) => {
        setResult(res.data.result === 1 
          ?
           <span className='s' style={{ color: "red" }}>Patient has a risk of Diabetes 😢</span> 
          :
           <span className='s' style={{ color: "greenyellow" }}>Patient has NO risk of Diabetes 😀</span>
           );
      })
      .catch((error) => {
        console.log(error)
      })

  } 
 
  return (
    <div className='diabetes-prediction'>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <h1>Gestational Diabetes Prediction</h1>
      <h5>Please enter the patient details</h5>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Form-group">
              <label htmlFor="pregnancies">Number of pregnancies</label>
              <input type="number" value={pregnancies} onChange={(event) => setPregnancies(event.target.value)} name="pregnancies" placeholder="eg. 0 male"  />
            </div>
            <div className="Form-group">
              <label htmlFor="glucose">Glucose Level</label>
              <input type="number" value={glucose} onChange={(event) => setGlucose(event.target.value)} name="glucose" placeholder="140 mg/dL or below"  />
            </div>
            <div className="Form-group">
              <label htmlFor="bloodpressure">Blood Pressure</label>
              <input type="number" value={bloodPressure} onChange={(event) => setBloodPressure(event.target.value)} name="bloodpressure" placeholder="140/90 mmHg or below"  />
            </div>
            <div className="Form-group">
              <label htmlFor="skinthickness">Skin Thickness</label>
              <input type="number" value={skinThickness} onChange={(event) => setSkinThickness(event.target.value)} name="skinthickness" placeholder="23.6 +- 7.5 mm"  />
            </div>
            <div className="Form-group">
              <label htmlFor="insulin">Insulin Level</label>
              <input type="number" value={insulin} onChange={(event) => setInsulin(event.target.value)} name="insulin" placeholder="2-25 uIU/mL"  />
            </div>
            <div className="Form-group">
              <label htmlFor="bmi">Body Mass Index</label>
              <input type="number" value={bmi} onChange={(event) => setBmi(event.target.value)} name="bmi" placeholder="18-25 kg/m^2"  />
            </div>
            <div className="Form-group">
              <label htmlFor="dpf">Diabetes Pedigree Function</label>
              <input type="text" value={diabetesPedigreeFunction} onChange={(event) => setdiabetesPedigreeFunction(event.target.value)} name="dpf" placeholder="0.078-2.42"  />
            </div>
            <div className="Form-group">
              <label htmlFor="age">Age</label>
              <input type="number" value={age} onChange={(event) => setAge(event.target.value)} name="age" placeholder="in years"  />
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