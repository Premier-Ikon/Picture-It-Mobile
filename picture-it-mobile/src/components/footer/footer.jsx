import './footer.css';

import Icon from '../../assets/icon.png';
import IconButton from '../iconButton/iconButton';

function Footer() {
    return ( 
        <div className='footer-container'>
            <div style={{display: 'flex', marginLeft: '12%'}}>
                <div style={{marginTop: '2%'}}>
                    <img style={{height: '200px'}} src={Icon} alt="ICON"/>
                </div>
                <div style={{display: 'flex', marginLeft: '32%', marginTop: '2%'}}>
                    <div>
                        <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Home</p>
                        <p style={{color: 'rgb(128, 128, 128)', width: '100px'}}>Learn More</p>
                        <p style={{color: 'rgb(128, 128, 128)'}}>Services</p>
                    </div>
                    <div style={{marginLeft: '30%'}}>
                        <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Services</p>
                        <p style={{color: 'rgb(128, 128, 128)', width: '150px'}}>Photo Booth</p>
                        <p style={{color: 'rgb(128, 128, 128)'}}>Party Equipment</p>
                    </div>
                    <div style={{marginLeft: '30%'}}>
                        <p style={{fontSize: '18px', color: 'white', fontWeight: 'bold'}}>Legals</p>
                        <p style={{color: 'rgb(128, 128, 128)'}}>License</p>
                        <p style={{color: 'rgb(128, 128, 128)'}}>Refund Policy</p>
                        <p style={{color: 'rgb(128, 128, 128)', width: '100px'}}>About Us</p>
                        <p style={{color: 'rgb(128, 128, 128)'}}>Contact Us</p>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop: '45px', display: 'flex'}} className='footer-bottom-content' >
                    <p style={{color: 'rgb(128, 128, 128)', marginTop: '35px'}}>Copyright © 2022</p>

                    <div style={{display: 'flex', marginTop: '27px', width: '90%', justifyContent:'flex-end'}}>
                        <IconButton style={{backgroundColor: 'red'}} icon={"fa-brands fa-facebook-f"} link={''}/>
                        <div style={{marginLeft: '10px'}}>
                            <IconButton icon={"fa-brands fa-instagram"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;