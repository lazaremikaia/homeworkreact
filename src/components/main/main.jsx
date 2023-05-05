import './main.css'
import lemon from './image/lemon.png'
import Carrot from './image/carrot.png'
import Basilica from './image/Basilica.png'
import Tomato from './image/tomato.png'
import Mulberry from './image/Mulberry.png'
import Orange from './image/orange.png'



function Main() {
    return(
        <div className="main-container">
            <div className="main-wrapper" >
                <div className='fruit'>
                  <div className='fruit-wrapper'>
                    <img className='main-img' src={lemon} alt="" />
                    <p className='img-title'>Green & Tasty Lemon</p>
                    <p className='fruits'>Fruits</p>
                  </div>
                  <div className='fruit-wrapper'>
                    <img  className='main-img' src={Carrot} alt="" />
                    <p className='img-title'> Organic Carrot</p>
                    <p className='fruits'>Farmer</p>
                  </div>
                  <div className='fruit-wrapper'>
                    <img className='main-img' src={Basilica} alt="" />
                    <p className='img-title'> Organic Betel Leaf</p>
                    <p className='fruits'> Leaf</p>
                  </div>
                </div>
                <div className='fruit'>
                    <div className='fruit-wrapper'>
                        <img className='main-img' src={Tomato} alt="" />
                        <p className='img-title' >Natural Tommato</p>
                        <p className='fruits'>Fruits</p>
                    </div>
                    <div className='fruit-wrapper'>
                        <img className='main-img' src={Mulberry} alt="" />
                        <p className='img-title' >Black Raspberry</p>
                        <p className='fruits'>Farmer</p>
                    </div>
                    <div className='fruit-wrapper'>
                        <img className='main-img' src={Orange} alt="" />
                        <p className='img-title'>Honey Orange</p>
                        <p className='fruits'>Farmer</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Main