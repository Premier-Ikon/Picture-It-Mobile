import './pricingCard.css';
import PricingCardElement from './pricingCardElement';
import Button from '../button/button';

function PricingCardPremium() {
    return ( 
        <div style={{backgroundColor: 'rgb(95, 98, 226'}} className='pricing-card-container'>
            <div className='pricing-card-header-container' style={{borderBottomColor: 'rgb(111, 114, 229)'}}>
                <h3 style={{marginTop: '15px', marginBottom: '15px', marginLeft: '15px', color: 'white'}} className='pricing-card-header'>Premium</h3>
            </div>
            <div className='benefit-element-outer-container'>
                <PricingCardElement type={'dark'} title={'3 Hours'}/>
                <PricingCardElement type={'dark'} title={'Unlimited 2x6 Printouts'}/>
                <PricingCardElement type={'dark'} title={'Personalized Event Graphic'}/>
                <PricingCardElement type={'dark'} title={'Setup/Tear Down Included'}/>
                <PricingCardElement type={'dark'} title={'Basic Templates'}/>
                <PricingCardElement type={'dark'} title={'Free Travel (Up to 30 miles)'}/>
                <PricingCardElement type={'dark'} title={'SMS Sharing'}/>
                <PricingCardElement type={'dark'} title={'On Call Attendant'}/>
                <PricingCardElement type={'dark'} title={'QR Code & Airdrop Sharing'}/>
                <PricingCardElement type={'dark'} title={'GIF Creation & Sharing'}/>
                <PricingCardElement type={'dark'} title={'Props Provided'}/>
            </div>
            <div style={{marginTop: '45px'}}>
                <div className='pricing-container'>
                    <h3 style={{fontWeight: 'bold', color: 'white'}} className='pricing-card-header'>$250</h3>
                    <p style={{fontSize: '12px', marginTop: '-22px', color: 'white'}}>+ $50 / additional hour</p>
                </div>
                <div style={{marginLeft: '25px', marginTop: '20px'}}>
                    <Button buttonStyle={'btn--pricing-dark'} children={'Get Started'}/>
                </div>
            </div>
        </div>
     );
}

export default PricingCardPremium;