import './section.css'
import Background from './img/background.png'



function Section () {
    return (
        <div className='secction-container'>
            <div className='section-wrapper'>
                <img className='section-img' src={Background} alt="" />
              <div className='Subs-wrapper'>
                <div className='nevwsletter'>
                <p>Subscribe to our Newsletter</p>
                </div>
                <div className='input-wrapper'>
                <form ><input className="searchinput" type="text" name="" placeholder=" Your Email Adress" /></form>
                <button className='sub-button'>Subscribe</button>
                </div>
                </div>  
            </div>
            

        </div>
    )
}

export default Section