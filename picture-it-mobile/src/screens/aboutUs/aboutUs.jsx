import './aboutUs.css';
import AboutUsImage from '../../assets/about-us-image.jpg';
import ProfileCard from '../../components/profileCard/profileCard';
import DylanHeadShot from '../../assets/dylan-headshot.png';
import MelinaHeadShot from '../../assets/melina-headshot.png';
import InternalAd from '../../components/internalAd/internalAd';

import { Helmet } from 'react-helmet-async';



function AboutUs() {
    return <>
        <Helmet>
            <meta
                name='description'
                content='Picture It Mobile is a young entrepreneur owned business that strives for customer happiness.'
            />
            <link rel='canonical' href='/about-us' />
        </Helmet>
        <div>
            <div className='about-us-header-container'>
                <div className='header-container-about'>
                    <h1 className='about-us-general-text-top'>About Us</h1>
                    <h3 style={{marginTop: '20px'}} className='general-large-header'>Photobooth business offering the best services</h3>
                    <p style={{}} className='about-us-general-text-bottom'>Being able to document your fun and having that opportunity to look back on these memories is one of the most important things to our team.</p>
                </div>
            </div>
            <div className='about-us-info-container'>
                <div className='about-us-info'>
                    <h3 className='info-header'>2+</h3>
                    <p className='info-content'>Years in business</p>
                </div>
                <div className='about-us-info'>
                    <h3 className='info-header'>20+</h3>
                    <p className='info-content'>Acquired customers</p>
                </div>
                <div className='about-us-info'>
                    <h3 className='info-header'>100%</h3>
                    <p className='info-content'>Happy customers</p>
                </div>
            </div>
            <div className='team-container'>
                <div className='our-team-container'>
                    <div className='our-team-inner'>
                        <h3 className='general-standard-header'>Our Team</h3>
                        <p style={{fontSize: '21px', marginTop: '-30px', marginLeft: '7.5%', width: '85%'}} className='about-us-general-text'>Being able to recall on all of your amazing events is one of our biggest goals. We strive to ensure that all of our customers are satisfied.</p>
                    </div>
                </div>
                <div className='profile-card-container'>
                    <div className='profile-image-container'>
                        <ProfileCard imageSrc={MelinaHeadShot} name={'Melina Rushton'} role={'Founder'}/>
                        <ProfileCard imageSrc={DylanHeadShot} name={'Dylan Guzman'} role={'Founder'}/>
                    </div>
                </div>
            </div>
            <div>
                <InternalAd/>
            </div>
        </div>
    </>
}

export default AboutUs;