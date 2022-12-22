import './pricing.css';
import { useState } from 'react';
import {Link} from "react-router-dom";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';

import PricingCardBase from '../../components/pricingCard/pricingCardBase';
import PricingCardPremium from '../../components/pricingCard/pricingCardPremium';
import FaqElement from '../../components/faqElement/faqElement';

import { Helmet } from 'react-helmet-async';


function Pricing() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How do I get rid of bees?',
            answer: 'We suggest giving a professional a call as bees are not something a homeowner should try and remove.',
            open: false
        },
        {
            question: 'How does bee removal work?',
            answer: 'Our technician will have to come out in order to identify the severity of the infestation, in order to decide whether they want to trap and remove, or exterminate. Our preference is to trap and remove depending on the severity of the infestation.',
            open: false
        },
        {
            question: 'Do you clean the area that the bees have impacted?',
            answer: 'Our technicians will do a thorough walk-through after they have removed the bees, in order to ensure the impacted area has been cleaned and treated.',
            open: false
        }
    ]);

    const toggleFaq = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }else {
                faq.open = false;
            }

            return  faq;
        }))
    };

    return <>
        <Helmet>
            <title>Picture It Mobile Pricing</title>
            <meta
                name='description'
                content='Picture It Mobile offers the best pricing all around the Inland Empire. No one can compete with our pricing as we are here for the memories.'
            />
            <link rel='canonical' href='/' />
        </Helmet>
        <div style={{backgroundColor: 'white'}}>
            <div className='pricing-header-container'>
                <div className='pricing-header-text'>
                    <div>
                        <h1 style={{paddingTop: '15px', paddingBottom: '10px'}} className='general-large-header'>Pricing options</h1>
                        <p className='general-text' style={{textAlign: 'center', marginTop: '-40px'}}>Get the option that best fits your needs</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <PricingCardBase/>
                    <div style={{padding: '50px'}}/>
                    <PricingCardPremium/>
                </div>
            </div>
            <div className='pricing-header-container-mobile'>
                <div className='pricing-header-text'>
                    <div>
                        <h3 style={{textAlign: 'center'}} className='general-large-header'>Pricing options</h3>
                        <p className='general-text' style={{textAlign: 'center', marginTop: '-35px'}}>Get the option that best fits your needs</p>
                    </div>
                </div>
                <div>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{marginTop: '10px'}}
                    >
                        <SwiperSlide style={{paddingBottom: '170px', display: 'flex', justifyContent: 'center'}}>
                            <PricingCardBase/>
                        </SwiperSlide>
                        <SwiperSlide style={{display: 'flex', justifyContent: 'center'}}>
                            <PricingCardPremium/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='faq-page-container'>
                <h3 style={{textAlign: 'center'}} className='general-standard-header'>Commonly asked questions</h3>
                <div className="faq-container">
                    {faqs.map((faq, i) => (
                        <FaqElement faq={faq} index={i} toggleFaq={toggleFaq}/>
                    ))}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '100px'}}>
                    <p style={{color: 'rgb(128, 128, 128)', fontSize: '18px'}}>Didn't find an answer?&nbsp;</p>
                    <div className='test'>
                        <Link to={'/contact-us'} className={'general-text-link'}>
                            <p className='test' style={{fontSize: '18px'}}>Contact Us</p>
                        </Link>

                    </div>
                </div>       
            </div>
        </div>
    </>
}

export default Pricing;