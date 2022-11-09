import React from 'react';
import './home.css';

import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
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

import Button from '../../components/button/button';
import HeaderImage from '../../assets/header-image.png';
import IconBox from '../../components/iconBox/iconBox';
import IconButton from '../../components/iconButton/iconButton';
import CheckItem from '../../components/checkItem/checkItem';
import InternalAd from '../../components/internalAd/internalAd';
import CarasoulItem from '../../components/carasoulItem/carasoulItem';


function HomeScreen() {
    return ( 
        <div>
            <div className='home-header-container'>
                <div className='home-left-container'>
                    <div className='left-header-component'>
                        <h3 className='general-large-header'>Your memories,</h3>
                        <h3 style={{marginTop: '-60px'}} className='general-large-header'>our joy.</h3>
                        <p className='general-text' style={{marginTop: '-35px'}}>Picture It Mobile is a company that provides personalized</p>
                        <p className='general-text' style={{marginTop: '-12px'}}>photo booth rentals.</p>
                    </div>
                    <div style={{display: 'flex', marginTop: '40px'}}>
                        <Button path='/' children={'Get Started'}></Button>
                        <div style={{marginLeft: '15px'}}>
                            <Button path='/' children={'Learn More'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                </div>
                <div>
                    <img style={{marginTop: '10%', height: '515px'}} src={HeaderImage} alt="Camera"/>
                </div>
            </div>
            <div className='home-second-container'>
                <div style={{marginLeft: '15%'}}>
                    <div className='home-icon-box-container'>
                        <IconBox image={CalendarImage} headerText={"Scheduling"} contentText={"Scheduling at ease is a priority for our customers"}/>
                        <div style={{marginLeft: '2%'}}>
                            <IconBox image={ClockImage} headerText={"On-Time Services"} contentText={"We strive to be on-time to all of our services"}/>
                        </div>
                    </div>
                    <div style={{marginTop: '13px'}} className='home-icon-box-container'>
                        <IconBox image={FileImage} headerText={"Media Files"} contentText={"We offer all of the images from the event to our customers"}/>
                        <div style={{marginLeft: '2%'}}>
                            <IconBox image={StarImage} headerText={"Satisfaction"} contentText={"We strive to have a satisfaction guarauntee"}/>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: '12%'}}>
                    <div className='second-right-container'>
                        <div>
                            <h3 className='general-standard-header'>The easiest way to make amazing memories.</h3>
                            <p style={{width: '400px', marginTop: '-30px'}} className='general-text'>The best way to ensure you are capturing all of the memories being made at your party. Easy and convenient to your needs.</p>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <Button path='/' children={'Explore'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                    <div style={{marginTop: '240px'}}>
                        <p style={{color: 'rgb(125, 125, 125)'}}>Follow us</p>
                        <div style={{marginTop: '-5px'}} className='bottom-icon-container'>
                            <IconButton icon={"fa-brands fa-facebook-f"} link={''}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-third-container'>
                <div>
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{marginTop: '50px', marginLeft: '18%'}}
                    >
                        <SwiperSlide style={{paddingBottom: '150px'}}>
                            <CarasoulItem headerText={'A customized experience!'} buttonText={'Learn More'} secondaryText={'Get a customized intergace and LED lights to blend with your enviroment.'} image={CustomExperience}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{width: '300px'}}>
                                <h3 className='general-standard-header'>A customized experience!</h3>
                                <p style={{marginTop: '-25px'}}>Get a customized intergace and LED lights to blend with your enviroment.</p>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                <Button path='/' children={'Learn More'}></Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{width: '300px'}}>
                                <h3 className='general-standard-header'>A customized experience!</h3>
                                <p style={{marginTop: '-25px'}}>Get a customized intergace and LED lights to blend with your enviroment.</p>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                <Button path='/' children={'Learn More'}></Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{width: '300px'}}>
                                <h3 className='general-standard-header'>A customized experience!</h3>
                                <p style={{marginTop: '-25px'}}>Get a customized intergace and LED lights to blend with your enviroment.</p>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                <Button path='/' children={'Learn More'}></Button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='home-fourth-container'>
                <div className='fourth-container-content'>
                    <div>
                        <img src={GroupImage} alt="GROUP"/>
                    </div>
                    <div style={{marginLeft: '24%', marginTop: '-60px'}}>
                        <h3 style={{width: '400px'}} className='general-standard-header'>Make more memories together</h3>
                        <div style={{marginTop: '-20px'}}>
                            <CheckItem contentText={'Many ways to save memories'} />
                            <CheckItem contentText={'Simply the best way to have a blast'} />
                            <CheckItem contentText={'Share memories with friends'} />
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Button path='/' children={'Learn More'}></Button>
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
                            <Button path='/' children={'Learn More'} buttonStyle={'btn--light'}></Button>
                        </div>
                    </div>
                    <div style={{marginLeft: '30%'}}>
                        <img src={SoloImage} alt="GROUP"/>
                    </div>
                </div>
            </div>
            <div>
                <InternalAd/>
            </div>
        </div>

     );
}

export default HomeScreen;
