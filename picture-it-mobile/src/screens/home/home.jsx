import React from 'react';
import './home.css';

import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CalendarImage from '../../assets/calendar-image.png';
import ClockImage from '../../assets/clock-image.png';
import FileImage from '../../assets/file-image.png';
import StarImage from '../../assets/star-image.png';
import GroupImage from '../../assets/group-image.png';
import SoloImage from '../../assets/solo-image.png';
import CustomExperience from '../../assets/custom-experience-image.png';
import InstandPhoto from '../../assets/instant-photo-image.png';
import PhotoBoothAttendant from '../../assets/photo-booth-attendant.png';

import Button from '../../components/button/button';
import HeaderImage from '../../assets/header-image.png';
import IconBox from '../../components/iconBox/iconBox';
import IconButton from '../../components/iconButton/iconButton';
import CheckItem from '../../components/checkItem/checkItem';
import InternalAd from '../../components/internalAd/internalAd';
import CarasoulItem from '../../components/carasoulItem/carasoulItem';
import CarasoulItemMobile from '../../components/carasoulItemMobile/carasoulItemMobile';
import { Helmet } from 'react-helmet-async';


function HomeScreen() {
    return <>
        <Helmet>
            <meta
                name='description'
                content='Welcome to Picture It Mobile, we strive to make sure that every one of our customers is satisfied with there service and happy and satisfied with there service.'
            />
            <link rel='canonical' href='/' />
        </Helmet>
        <div>
            <div className='home-header-container'>
                <div className='home-left-container'>
                    <div className='left-header-component'>
                        <h1 style={{paddingBottom: '10px'}} className='general-large-header'>Your memories,</h1>
                        <h3 className='general-large-header-bottom'>our joy.</h3>
                        <p className='general-text' style={{marginTop: '-35px', width: '80%'}}>Picture It Mobile is a company that provides personalized photo booth rentals.</p>
                    </div>
                    <div className='home-header-button-container'>
                        <Button path='/contact-us' children={'Get Started'}></Button>
                        <div style={{marginLeft: '15px'}}>
                            <Button path='/pricing' children={'Learn More'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='home-header-image' src={HeaderImage} alt="Camera"/>
                </div>
            </div>
            <div className='home-header-container-mobile'>
                <div style={{paddingLeft: '10%'}} className='home-left-container'>
                    <div className='left-header-component'>
                        <h3 className='general-large-header' style={{fontSize: '45px', textAlign: 'center',}}>Your memories, our joy.</h3>
                        <p className='general-text' style={{textAlign: 'center', marginTop: '-35px'}}>Picture It Mobile is a company that provides personalized photo booth rentals.</p>
                    </div>
                    <div className='home-header-button-container' style={{display: 'flex', justifyContent: 'center', paddingTop: '0px'}}>
                        <Button path='/contact-us' children={'Get Started'}></Button>
                        <div style={{marginLeft: '15px'}}>
                            <Button path='/pricing' children={'Learn More'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img className='home-header-image' src={HeaderImage} alt="Camera"/>
                </div>
            </div>

            <div className='home-second-container'>
                <div style={{marginLeft: '15%'}}>
                    <div className='home-icon-box-container'>
                        <Link to='/pricing' style={{textDecoration: 'none'}}>
                            <IconBox image={CalendarImage} headerText={"Scheduling"} contentText={"Scheduling at ease is a priority for our customers"}/>
                        </Link>
                        <div style={{marginLeft: '2%'}}>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <IconBox image={ClockImage} headerText={"On-Time Services"} contentText={"We strive to be on-time to all of our services"}/>
                            </Link>
                        </div>
                    </div>
                    <div style={{marginTop: '13px'}} className='home-icon-box-container'>
                        <Link to='/pricing' style={{textDecoration: 'none'}}>
                            <IconBox image={FileImage} headerText={"Media Files"} contentText={"We offer all of the images from the event to our customers"}/>
                        </Link>
                        <div style={{marginLeft: '2%'}}>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <IconBox image={StarImage} headerText={"Satisfaction"} contentText={"We strive to have a satisfaction guarauntee"}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: '12%'}}>
                    <div className='second-right-container'>
                        <div>
                            <h3 className='general-standard-header'>The easiest way to make amazing memories.</h3>
                            <p style={{width: '100%', marginTop: '-30px'}} className='general-text'>The best way to ensure you are capturing all of the memories being made at your party. Easy and convenient to your needs.</p>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <Button path='/pricing' children={'Explore'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                    <div className='icon-box-container-home'>
                        <p style={{color: 'rgb(125, 125, 125)'}}>Follow us</p>
                        <div style={{marginTop: '-5px'}} className='bottom-icon-container'>
                            <IconButton icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-second-container-mobile'>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '100%'}} className='second-right-container'>
                        <div style={{paddingLeft: '15px', paddingRight: '15px'}}>
                            <h3 style={{textAlign: 'center'}} className='general-standard-header'>The easiest way to make amazing memories.</h3>
                            <p style={{width: '100%', marginTop: '-30px', textAlign: 'center'}} className='general-text'>The best way to ensure you are capturing all of the memories being made at your party. Easy and convenient to your needs.</p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: '30px'}}>
                    <div style={{paddingRight: '10px'}}>
                        <div className='home-icon-box-container'>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <IconBox image={CalendarImage} headerText={"Scheduling"} contentText={"Scheduling at ease is a priority for our customers"}/>
                            </Link>
                            <div style={{marginLeft: '2%'}}>
                                <Link to='/pricing' style={{textDecoration: 'none'}}>
                                    <IconBox image={ClockImage} headerText={"On-Time Services"} contentText={"We strive to be on-time to all of our services"}/>
                                </Link>
                            </div>
                        </div>
                        <div style={{marginTop: '13px'}} className='home-icon-box-container'>
                            <Link to='/pricing' style={{textDecoration: 'none'}}>
                                <IconBox image={FileImage} headerText={"Media Files"} contentText={"We offer all of the images from the event to our customers"}/>
                            </Link>
                            <div style={{marginLeft: '2%'}}>
                                <Link to='/pricing' style={{textDecoration: 'none'}}>
                                    <IconBox image={StarImage} headerText={"Satisfaction"} contentText={"We strive to have a satisfaction guarauntee"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
                    <Button path='/pricing' children={'Explore'} buttonStyle={'btn--light-wide'}></Button>
                </div>
                {/* <div className='icon-box-container-home'>
                    <p style={{color: 'rgb(125, 125, 125)'}}>Follow us</p>
                    <div style={{marginTop: '-5px'}} className='bottom-icon-container'>
                        <IconButton icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                        <div style={{marginLeft: '10px'}}>
                            <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className='home-third-container'>
                <div>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={1000}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{marginTop: '50px', paddingLeft: '17%'}}
                    >
                        <SwiperSlide style={{paddingBottom: '120px'}}>
                            <CarasoulItem headerText={'A customized experience!'} buttonText={'Learn More'} secondaryText={'Get a customized intergace and LED lights to blend with your enviroment.'} image={CustomExperience}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarasoulItem headerText={'Instant photos!'} buttonText={'Learn More'} secondaryText={'Give a personalized keepsake for everyone to take home and cherish.'} image={InstandPhoto}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarasoulItem headerText={'Photo booth attendant not included!'} buttonText={'Learn More'} secondaryText={'Fortunately for you we do not require a photo booth attendant with our setup.'} image={PhotoBoothAttendant}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='home-third-container-mobile'>
                <div>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{marginTop: '50px'}}
                    >
                        <SwiperSlide style={{paddingBottom: '120px'}}>
                            <CarasoulItemMobile headerText={'A customized experience!'} buttonText={'Learn More'} secondaryText={'Get a customized intergace and LED lights to blend with your enviroment.'} image={CustomExperience}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarasoulItemMobile headerText={'Instant photos!'} buttonText={'Learn More'} secondaryText={'Give a personalized keepsake for everyone to take home and cherish.'} image={InstandPhoto}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='home-fourth-container'>
                <div>
                    <div className='fourth-container-content'>
                        <div>
                            <img style={{height: '430px'}} src={GroupImage} alt="GROUP"/>
                        </div>
                        <div style={{marginLeft: '24%', marginTop: '-60px'}}>
                            <h3 style={{width: '400px'}} className='general-standard-header'>Make more memories together</h3>
                            <div style={{marginTop: '-20px'}}>
                                <CheckItem contentText={'Many ways to save memories'} />
                                <CheckItem contentText={'Simply the best way to have a blast'} />
                                <CheckItem contentText={'Share memories with friends'} />
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <Button path='/pricing' children={'Learn More'}></Button>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: '-20px'}} className='fourth-container-content'>
                        <div style={{marginTop: '-60px', marginLeft: '5%'}}>
                            <h3 style={{width: '380px'}} className='general-standard-header'>Easy experience for customers</h3>
                            <div style={{marginTop: '-20px'}}>
                                <CheckItem contentText={'Ensure a smooth process'} />
                                <CheckItem contentText={'Simple payment process'} />
                                <CheckItem contentText={'We work around your time'} />
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <Button path='/pricing' children={'Learn More'}></Button>
                            </div>
                        </div>
                        <div style={{marginLeft: '20%'}}>
                            <img style={{height: '430px'}} src={SoloImage} alt="GROUP"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='home-fourth-container-mobile'>
                <div>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <h3 style={{width: '400px', textAlign: 'center'}} className='general-standard-header'>Make more memories together</h3>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '-25px'}}>
                            <div>
                                <CheckItem contentText={'Many ways to save memories'} />
                                <CheckItem contentText={'Simply the best way to have a blast'} />
                                <CheckItem contentText={'Share memories with friends'} />
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '-20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div>
                                <h3 style={{width: '400px', textAlign: 'center'}} className='general-standard-header'>Easy experience for customers</h3>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '-25px'}}>
                            <div>
                                <CheckItem contentText={'Ensure a smooth process'} />
                                <CheckItem contentText={'Simple payment process'} />
                                <CheckItem contentText={'We work around your time'} />
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                            <div>
                                <Button buttonStyle={'btn--primary-wide'} path='/pricing' children={'Get Started'}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <InternalAd/>
            </div>
        </div>

     </>
}

export default HomeScreen;
