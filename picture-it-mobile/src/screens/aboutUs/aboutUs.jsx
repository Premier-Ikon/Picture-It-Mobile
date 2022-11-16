import './aboutUs.css';
import AboutUsImage from '../../assets/about-us-image.jpg';
import ProfileCard from '../../components/profileCard/profileCard';
import DylanHeadShot from '../../assets/dylan-headshot.png';
import MelinaHeadShot from '../../assets/melina-headshot.png';
import InternalAd from '../../components/internalAd/internalAd';


function AboutUs() {
    return ( 
        <div>
            <div className='about-us-header-container'>
                <div style={{width: '45%'}}>
                    <p style={{fontSize: '24px'}} className='about-us-general-text'>About Us</p>
                    <h3 style={{marginTop: '20px'}} className='general-large-header'>Photobooth business offering the best services</h3>
                    <p style={{fontSize: '21px', marginTop: '-30px', marginLeft: '7.5%', width: '85%'}} className='about-us-general-text'>Being able to document your fun and having that opporutinty to look back on these memories is one of the most important things to our team.</p>
                </div>
            </div>
            <div className='about-us-info-container'>
                <div className='about-us-info'>
                    <h3 style={{fontSize: '60px', color: 'white'}}>2+</h3>
                    <p style={{marginTop: '-40px', fontSize: '20px', color: 'rgb(175, 177, 241)'}}>Years in business</p>
                </div>
                <div className='about-us-info'>
                    <h3 style={{fontSize: '60px', color: 'white'}}>20+</h3>
                    <p style={{marginTop: '-40px', fontSize: '20px', color: 'rgb(175, 177, 241)'}}>Acquired customers</p>
                </div>
                <div className='about-us-info'>
                    <h3 style={{fontSize: '60px', color: 'white'}}>100%</h3>
                    <p style={{marginTop: '-40px', fontSize: '20px', color: 'rgb(175, 177, 241)'}}>Happy customers</p>
                </div>
            </div>
            <div className='team-container'>
                <div className='our-team-container'>
                    <div style={{width: '45%'}}>
                        <h3 className='general-standard-header'>Our Team</h3>
                        <p style={{fontSize: '21px', marginTop: '-30px', marginLeft: '7.5%', width: '85%'}} className='about-us-general-text'>Being able to recall on all of your amazing events is one of our biggest goals. We strive to ensure that all of our customers are satisfied</p>
                    </div>
                </div>
                <div className='profile-card-container'>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '25%', paddingRight: '25%'}}>
                        <ProfileCard imageSrc={MelinaHeadShot} name={'Melina Rushton'} role={'Founder'}/>
                        <ProfileCard imageSrc={DylanHeadShot} name={'Dylan Guzman'} role={'Founder'}/>
                    </div>
                </div>
            </div>
            <div>
                <InternalAd/>
            </div>
        </div>
     );
}

export default AboutUs;