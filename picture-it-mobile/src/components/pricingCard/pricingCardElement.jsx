import './pricingCard.css';

function PricingCardElement({title, type}) {
    return ( 
        <div className='benefit-element-container'>
            <i style = {{color: 'rgb(42, 182, 145', fontSize: '15px'}} class="fa-regular fa-circle-check"></i>
            <p style={{color: type == 'dark' ? 'white' : 'rgb(25, 25, 25)'}} className='pricing-card-element-text'> {title} </p>
        </div>
     );
}

export default PricingCardElement;