import './internalAd.css';
import Button from '../../components/button/button';

import BombIcon from '../../assets/bomb-icon.png';

function InternalAd() {
    return ( 
        <div className="internal-ad-container">
            <div style={{marginLeft: '10%'}}>
                <div style={{width: '550px'}}>
                    <h3 style={{color: 'white'}} className='general-standard-header'>The best way to make sure you have a great time.</h3>
                </div>
                <div style={{display: 'flex', marginTop: '-15px'}}>
                    <Button path='/' children={'Learn More'} buttonStyle={'btn--alt'}></Button>
                    <div style={{marginLeft: '.75%'}}>
                        <Button path='/' children={'Learn More'} buttonStyle={'btn--primary-light'}></Button>
                    </div>
                </div>
            </div>
            <img style={{marginLeft: '5%'}} src={BombIcon} alt="BOMB"/>
        </div>
     );
}

export default InternalAd;