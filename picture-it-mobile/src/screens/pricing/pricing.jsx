import PricingCardBase from '../../components/pricingCard/pricingCardBase';
import PricingCardPremium from '../../components/pricingCard/pricingCardPremium';
import './pricing.css';

function Pricing() {
    return ( 
        <div>
            <div className='pricing-header-container'>
                <div className='pricing-header-text'>
                    <div>
                        <h3 className='general-large-header'>Pricing options</h3>
                        <p className='general-text' style={{textAlign: 'center', marginTop: '-40px'}}>Get the option that best fits your needs</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <PricingCardBase/>
                    <div style={{padding: '50px'}}/>
                    <PricingCardPremium/>
                </div>
            </div>
        </div>
     );
}

export default Pricing;