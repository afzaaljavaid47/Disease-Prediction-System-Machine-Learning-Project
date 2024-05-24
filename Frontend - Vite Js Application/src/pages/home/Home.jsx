import Description from '../../components/description/Description'
import Feedback from '../../components/feedback/Feedback'
import Header from '../../components/header/Header'
import Service from '../../components/service/Service'
import Footer from '../../components/footer/Footer'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
       <Header />
       <Service />
       <Description />
       <Feedback />
       <Footer />
    </div>
  )
}

export default Home