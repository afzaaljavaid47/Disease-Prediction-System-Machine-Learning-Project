import './DiseaseDetail.scss'
import heart from '../../assets/Heart.png'
import sugar from '../../assets/sugar.png'
import diet from '../../assets/diet.png'
const DiseaseDetail = () => {
  return (
    <div className='disease-detail'>
      <div className="container">
        <h1>Heart Disease</h1>
        <img src={heart} /><br />
        <h3>Overview</h3>
        <p>Heart disease describes a range of conditions that affect your heart. Diseases under the heart disease umbrella include blood vessel diseases, such as coronary artery disease; heart rhythm problems (arrhythmias); and heart defects you're born with (congenital heart defects), among others.<br />
          The term "heart disease" is often used interchangeably with the term "cardiovascular disease." Cardiovascular disease generally refers to conditions that involve narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke. Other heart conditions, such as those that affect your heart's muscle, valves or rhythm, also are considered forms of heart disease. <br />
          Many forms of heart disease can be prevented or treated with healthy lifestyle choices.</p>
        <h3>Symptoms</h3>
        <ul>
          <li>Chest pain, chest tightness, chest pressure and chest discomfort (angina)</li>
          <li>Shortness of breath</li>
          <li>Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed</li>
          <li>Pain in the neck, jaw, throat, upper abdomen or back</li>
        </ul>
        <h1>Diabetes</h1>
        <img src={sugar} /><br /><br />
        <h3>Overview</h3>
        <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.</p>
        <h3>What health problems can people with diabetes develop? </h3>
        <p>Over time, high blood glucose leads to problems such as</p>
        <h3>Symptoms</h3>
        <ul>
          <li>heart disease</li>
          <li>stroke</li>
          <li>kidney disease</li>
          <li>eye problems</li>
          <li>dental disease</li>
          <li>nerve damage</li>
          <li>foot problems</li>
        </ul>
        <br />

        
        <h1>Diet Details</h1>
        <img src={diet} alt="diet image" />
        <p>As you know that how much the diet is important in human's life 🥗🥙. If human being does not take care of their health then it destroys their complete life😢. And if someone consume bad food like fast food 🍔🍕🍟 and the meals with hot spices then it is very very harmful for the heart and the whole body😢. So we decided to take care of the Human's body with the help of machine learning algorithms😍. It gives you the complete diet plans for your whole day from sun rise 🌞 to sun set 🌇. </p>

      </div>
    </div>
  )
}

export default DiseaseDetail