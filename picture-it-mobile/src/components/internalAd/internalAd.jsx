import './internalAd.css';
import Button from '../../components/button/button';

import BombIcon from '../../assets/bomb-icon.png';

function InternalAd() {
    return ( 
        <div className="internal-ad-container">
            <div className='inner-ad-container'>
                <div className='ad-header-container'>
                    <h3 style={{color: 'white'}} className='general-standard-header-ad'>The best way to make sure you have a great time.</h3>
                </div>
                <div className='ad-button-container' style={{display: 'flex', marginTop: '-15px'}}>
                    <Button path='/pricing' children={'Learn More'} buttonStyle={'btn--alt'}></Button>
                    <div style={{marginLeft: '.75%'}}>
                        <Button path='/contact-us' children={'Contact Us'} buttonStyle={'btn--primary-light'}></Button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default InternalAd;