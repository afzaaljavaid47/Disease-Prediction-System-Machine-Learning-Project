import { useState } from 'react'
import axios from 'axios'
import {toast, Toaster} from 'react-hot-toast'
import './Heart.scss'

const Heart = () => {
  const [age, setAge] = useState("")
  const [sex, setSex] = useState("")
  const [cp, setCp] = useState("")
  const [trestbps, setTrestbps] = useState("")
  const [cholestrol, setCholestrol] = useState("")
  const [fbs, setFbs] = useState("")
  const [restecg, setRestecg] = useState("")
  const [thalach, setThalach] = useState("")
  const [exang, setExang] = useState("")
  const [oldpeak, setOldpeak] = useState("")
  const [slope, setSlope] = useState("")
  const [ca, setCa] = useState("")
  const [thal, setThal] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState({})
  const validateForm = () => {
    let err = {}
    // const regex = /^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/
    // const regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
    if (age == '' || sex == '' || cp == '' || trestbps == '' || cholestrol == '' || fbs == '' || restecg == '' || thalach == '' || exang == '' || oldpeak == '' || slope == '' || ca == '') {
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
    const isValid = validateForm()
    console.log(isValid)
    axios.post('http://localhost:5000/heart-prediction', {
      age: age,
      sex: sex,
      cp: cp,
      trestbps: trestbps,
      cholestrol: cholestrol,
      fbs: fbs,
      restecg: restecg,
      thalach: thalach,
      exang: exang,
      oldpeak: oldpeak,
      slope: slope,
      ca: ca,
      thal: thal

    })
      .then((res) => {
        setResult(res.data.result === 1
          ?
          <span className='s' style={{ color: "red" }}>Patient has a risk of Heart Disease 😥</span>
          :
          <span className='s' style={{ color: "yellowgreen" }}>Patient has NO risk of Heart Disease 😀</span>
        );
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='prediction'>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <h1>Heart Disease Prediction</h1>
      <h5>Please enter the patient details</h5>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Form-group">
              <label htmlFor="age">Age </label>
              <input type="number" value={age} onChange={(event) => setAge(event.target.value)} name="age" placeholder="in years"  />
            </div>
            <div className="Form-group">
              <label htmlFor="sex">Sex</label>
              <input type="number" value={sex} onChange={(event) => setSex(event.target.value)} name="sex" placeholder="(M=1,F=0)"  />
            </div>
            <div className="Form-group">
              <label htmlFor="cp">Chest Pain</label>
              <input type="number" value={cp} onChange={(event) => setCp(event.target.value)} name="cp" placeholder="(0-3 levels)"  />
            </div>
            <div className="Form-group">
              <label htmlFor="trestbps">Resting Blood Pressure</label>
              <input type="number" value={trestbps} onChange={(event) => setTrestbps(event.target.value)} name="trestbps" placeholder="120-90/80-60 mmHg"  />
            </div>
            <div className="Form-group">
              <label htmlFor="chol">Cholestrol</label>
              <input type="number" value={cholestrol} onChange={(event) => setCholestrol(event.target.value)} name="chol" placeholder="(150 mg/dL or below)"  />
            </div>
            <div className="Form-group">
              <label htmlFor="fbs">Fasting Blood Sugar</label>
              <input type="number" value={fbs} onChange={(event) => setFbs(event.target.value)} name="fbs" placeholder="120 mg/dL or above"  />
            </div>

            <div className="Form-group">
              <label htmlFor="restecg">Rest ECG</label>
              <input type="number" value={restecg} onChange={(event) => setRestecg(event.target.value)} name="restecg" placeholder="0-2 levels"  />
            </div>

            <div className="Form-group">
              <label htmlFor="thalach">Thalach</label>
              <input type="number" value={thalach} onChange={(event) => setThalach(event.target.value)} name="thalach" placeholder="60-100 bpm"  />
            </div>
            <div className="Form-group">
              <label htmlFor="exang">Exercise Induced Angina</label>
              <input type="number" value={exang} onChange={(event) => setExang(event.target.value)} name="exang" placeholder="Yes=1,No=0"  />
            </div>

            <div className="Form-group">
              <label htmlFor="oldpeak">Old Peak</label>
              <input type="number" value={oldpeak} onChange={(event) => setOldpeak(event.target.value)} name="oldpeak" placeholder="0-6 levels"  />
            </div>

            <div className="Form-group">
              <label htmlFor="slope_0">SLOPE</label>
              <input type="number" value={slope} onChange={(event) => setSlope(event.target.value)} name="SLOPE_0" placeholder="0-2 levels"  />
            </div>

            <div className="Form-group">
              <label htmlFor="CA_0">Vessels Colored</label>
              <input type="number" value={ca} onChange={(event) => setCa(event.target.value)} name="CA_0" placeholder="0-3 levels"  />
            </div>

            <div className="Form-group">
              <label htmlFor="THAL_1">Thalassemia</label>
              <input type="number" value={thal} onChange={(event) => setThal(event.target.value)} name="THAL_1" placeholder="0-2 levels"  />
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-primary btn-lg">Predict</button>
          </fieldset>
        </form>
        <div className='display'>
          {result && (
            <div>
              <h2 className='predic'>Prediction Result:</h2>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Heart