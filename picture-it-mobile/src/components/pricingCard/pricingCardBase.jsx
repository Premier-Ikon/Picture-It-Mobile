import './pricingCard.css';
import PricingCardElement from './pricingCardElement';
import Button from '../button/button';

function PricingCardBase() {
    return ( 
        <div className='pricing-card-container'>
            <div className='pricing-card-header-container'>
                <h3 style={{marginTop: '15px', marginBottom: '15px', marginLeft: '15px'}} className='pricing-card-header'>Base</h3>
            </div>
            <div className='benefit-element-outer-container'>
                <PricingCardElement title={'3 Hours'}/>
                <PricingCardElement title={'Unlimited 2x6 Printouts'}/>
                <PricingCardElement title={'Personalized Event Graphic'}/>
                <PricingCardElement title={'Setup/Tear Down Included'}/>
                <PricingCardElement title={'Basic Templates'}/>
                <PricingCardElement title={'Free Travel (Up to 30 miles)'}/>
                <PricingCardElement title={'SMS Sharing'}/>
                <PricingCardElement title={'On Call Attendant'}/>
            </div>
            <div className='bottom-container-base'>
                <div className='pricing-container'>
                    <h3 style={{fontWeight: 'bold'}} className='pricing-card-header'>$250</h3>
                    <p style={{fontSize: '12px', marginTop: '-22px'}}>+ $50 / additional hour</p>
                </div>
                <div style={{marginLeft: '25px', marginTop: '20px'}}>
                    <Button buttonStyle={'btn--pricing-light'} children={'Get Started'} path='/contact-us'/>
                </div>
            </div>
        </div>
     );
}

export default PricingCardBase;