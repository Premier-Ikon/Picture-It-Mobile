import './footer.css';

import Icon from '../../assets/icon.png';
import IconButton from '../iconButton/iconButton';
import {Link} from "react-router-dom";

function Footer() {
    return ( 
        <div>

            <div className='footer-container'>
                <div style={{display: 'flex', marginLeft: '12%'}}>
                    <div style={{marginTop: '2%'}}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <img style={{height: '200px'}} src={Icon} alt="ICON"/>
                        </Link>
                    </div>
                    <div style={{display: 'flex', marginTop: '60px', position: 'absolute', right: '390px'}}>
                        <div>
                            <Link to='/' style={{textDecoration: 'none'}}>
                                <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Home</p>
                            </Link>
                            <Link to='/about-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '100px'}}>Learn More</p>
                            </Link>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)'}}>Services</p>
                            </Link>
                        </div>
                        <div style={{marginLeft: '30%'}}>
                            <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Services</p>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '150px'}}>Photo Booth</p>
                            </Link>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)'}}>Party Equipment</p>
                            </Link>
                        </div>
                        <div style={{marginLeft: '30%'}}>
                            <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Info</p>
                            <Link to='/about-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '100px'}}>About Us</p>
                            </Link>
                            <Link to='/contact-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)'}}>Contact Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginTop: '45px', display: 'flex'}} className='footer-bottom-content' >
                        <p style={{color: 'rgb(128, 128, 128)', marginTop: '35px'}}>Copyright © 2022</p>

                        <div style={{display: 'flex', marginTop: '27px',position: 'absolute', right: '10%'}}>
                            <IconButton style={'light'} icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='footer-container-mobile'>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginTop: '2%'}}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <img style={{height: '100px'}} src={Icon} alt="ICON"/>
                        </Link>
                    </div>
                </div>
                <div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '0%', marginLeft: '10%', marginRight: '10%'}}>
                        <div>
                            <Link to='/' style={{textDecoration: 'none'}}>
                                <p style={{fontSize: '16px', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Home</p>
                            </Link>
                            <Link to='/about-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '100px', textAlign: 'center'}}>Learn More</p>
                            </Link>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', textAlign: 'center'}}>Services</p>
                            </Link>
                        </div>
                        <div style={{marginLeft: '5%'}}>
                            <p style={{fontSize: '16px', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Services</p>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '150px', textAlign: 'center'}}>Photo Booth</p>
                            </Link>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', textAlign: 'center'}}>Party Equipment</p>
                            </Link>
                        </div>
                        <div style={{marginLeft: '5%'}}>
                            <p style={{fontSize: '16px', color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Info</p>
                            <Link to='/about-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', width: '100px', textAlign: 'center'}}>About Us</p>
                            </Link>
                            <Link to='/contact-us' style={{textDecoration: 'none'}}>
                                <p style={{color: 'rgb(128, 128, 128)', textAlign: 'center'}}>Contact Us</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginTop: '15px', display: 'flex'}} className='footer-bottom-content' >
                        <p style={{color: 'rgb(128, 128, 128)', marginTop: '35px'}}>Copyright © 2022</p>

                        <div style={{display: 'flex', marginTop: '27px',position: 'absolute', right: '10%'}}>
                            <IconButton style={'light'} icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;