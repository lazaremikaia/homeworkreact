import Image from './image/Image.png'
import './Header.css'


function Header() {
    return (
        <div className='header-wrapper'>
             <img  src={Image} alt="" />
           
           <h1 className='title'>Portfolio Standard</h1>
            
        </div>
    )
    
}

export default Header
