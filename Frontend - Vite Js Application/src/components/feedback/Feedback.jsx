import './Feedback.scss'

const Feedback = () => {
  return (
    <div className='feedback'>
        <div className="container">
            <h1>Feedback</h1>
            <hr />
            <p>Your Feedback means a lot for us. Give us your feedback that will help us to improve the website.</p>
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder='Type Your Message here...' />
                <button>Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default Feedback