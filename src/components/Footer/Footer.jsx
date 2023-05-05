import "./Footer.css"
import Logo from './logo/Logo.png'
import FB from './logo/Fb.png'
import Insta from './logo/Insta.png'
import Twiter from './logo/Twiter.png'
import Pintrest from './logo/Pintrest.png'


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="contact-wrapper">
                  <h4 className="contact">Contact Us</h4>
                  <p className="contacts">Email </p>
                  <p>needhelp@Organia.com</p>
                  <p className="contacts">Phone</p>
                  <p>666 888 888</p>
                  <p className="contacts">Address</p>
                  <p>88 road, borklyn street, USA</p>
                </div>
                <div className="organick-wrapper">
                    <div className="organick">
                        <img src={Logo} alt="" />
                        <h4>Organick</h4>
                    </div>
                    <p className="simpledummy">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</p>
                    <div className="icon-wrapper">
                        <img src={FB} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twiter} alt="" />
                        <img src={Pintrest} alt="" />
                    </div>
                </div>
                <div className="utility">
                        <h4>Style Guide</h4>
                        <p> 404 Not Found</p>
                        <p> Password Protected</p>
                        <p> Licences</p>
                        <p> Changelog</p>
                    </div>

            </div>
        </footer>
    )
    
}

export default Footer