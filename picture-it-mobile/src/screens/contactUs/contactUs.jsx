import './contactUs.css';
import {useState, useRef} from "react";
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Calendar from 'react-calendar';

import HeaderImage from '../../assets/contact-us-image.png';
import IconButton from '../../components/iconButton/iconButton';



function ContactUs() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        message: "",
    });

    const [eventDate, setEventDate] = useState(new Date());

    const form = useRef();

    const {name, email, phone, address, date, message} = data

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const onDateChange = eventDate => {
        setEventDate(eventDate);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lommso5', 'template_9coifp6', form.current, '58NNfs3g7fy1pb2A3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        
        emailjs.sendForm('service_ra8c5nb', 'template_bvt6lgh', form.current, '58NNfs3g7fy1pb2A3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        try {
            const response = await fetch('https://v1.nocodeapi.com/dgoose201/google_sheets/vIDxVhOVFkBjplwu?tabId=sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[name, email, phone, address, date, message, new Date().toLocaleString()]])
            });
            await response.json()
            setData({...data, name: "", email: "", phone: "", address: "", date: "", message: ""});


        }catch (err) {
            console.log(err)
        }

        alert("Thank you for your inquiry, someone on our team will be in contact as soon as possible . \n\n" +
            "Please allow 24-48 hours for a response. If your inquiry is urgent please call us at (951)796-7321")
    }

    return <>
        <Helmet>
            <title>Contact Picture It Mobile</title>
            <meta
                name='description'
                content='Feel free to contact us with any inquiries. We will be sure to make sure your special event is captured through our photo booth.'
            />
            <link rel='canonical' href='/' />
        </Helmet>
        <div>
            <div className='contact-header-container'>
                <div className='header-data-container'>
                    <div className='form-data-container'>
                        <div style={{marginBottom: '20px'}}>
                            <h1 style={{paddingBottom: '10px', paddingTop: '15px'}} className='general-standard-header'>Get In Touch With Us</h1>
                            <p style={{fontSize: '18px', marginTop: '-30px'}} className='about-us-general-text'>Fill out the form and an expert will contact you shortly</p>
                        </div>
                        <div className="form-data">
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="top-data">
                                    <div>
                                        <div className="data-header">
                                            <label>Your name</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"name"}
                                            autoComplete={"off"}
                                            value={name}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                                        <div className="data-header">
                                            <label>Your email</label>
                                        </div>
                                        <input
                                            type="email"
                                            name={"email"}
                                            autoComplete={"off"}
                                            value={email}
                                            onChange={handleChange}
                                            className="data-box"

                                        />
                                    </div>
                                </div>
                                <div className="middle-data">
                                    <div>
                                        <div className="data-header">
                                            <label>Your phone number</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"phone"}
                                            autoComplete={"off"}
                                            value={phone}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                                        <div className="data-header">
                                            <label>Event address</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"address"}
                                            autoComplete={"off"}
                                            value={address}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                </div>
                                <div>
                                <div className='bottom-data'>
                                    <div>
                                        <div className="data-header">
                                            <label>Date of event</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"date"}
                                            autoComplete={"off"}
                                            value={date}
                                            onChange={handleChange}
                                            className="data-box"
                                        />

                                    </div>
                                </div>
                                </div>
                                <div style={{marginTop: '10px'}}>
                                    <div className="data-header">
                                        <label>Your message</label>
                                    </div>
                                    <textarea
                                        name={"message"}
                                        // rows={3}
                                        autoComplete={"off"}
                                        value={message}
                                        className={"message-box"}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={"submit-button-container"}>
                                    <input type={"submit"} style={{cursor: "pointer"}} value={"Submit"} className="submit-button"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <Calendar onChange={onDateChange} value={eventDate}/> */}

                    <div>
                        <img className='contact-image' style={{}} src={HeaderImage} alt="Camera"/>
                    </div>
                </div>
            </div>
            <div className='contact-header-container-mobile'>
                <div className='header-data-container'>
                    <div className='form-data-container'>
                        <div style={{marginBottom: '20px'}}>
                            <h3 className='general-standard-header'>Get In Touch With Us</h3>
                            <p className='contact-us-general-text'>Fill out the form and an expert will contact you shortly</p>
                        </div>
                        <div className="form-data">
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="top-data">
                                    <div>
                                        <div className="data-header">
                                            <label>Your name</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"name"}
                                            autoComplete={"off"}
                                            value={name}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                                        <div className="data-header">
                                            <label>Your email</label>
                                        </div>
                                        <input
                                            type="email"
                                            name={"email"}
                                            autoComplete={"off"}
                                            value={email}
                                            onChange={handleChange}
                                            className="data-box"

                                        />
                                    </div>
                                </div>
                                <div className="middle-data">
                                    <div>
                                        <div className="data-header">
                                            <label>Your phone number</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"phone"}
                                            autoComplete={"off"}
                                            value={phone}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                    <div style={{marginLeft: '30px'}}>
                                        <div className="data-header">
                                            <label>Event address</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"address"}
                                            autoComplete={"off"}
                                            value={address}
                                            onChange={handleChange}
                                            className="data-box"
                                        />
                                    </div>
                                </div>
                                <div className='bottom-data'>
                                    <div>
                                        <div className="data-header">
                                            <label>Date of event</label>
                                        </div>
                                        <input
                                            type="text"
                                            name={"date"}
                                            autoComplete={"off"}
                                            value={date}
                                            onChange={handleChange}
                                            className="data-box"
                                        />

                                    </div>
                                </div>
                                <div style={{marginTop: '10px'}}>
                                    <div className="data-header">
                                        <label>Your message</label>
                                    </div>
                                    <textarea
                                        name={"message"}
                                        // rows={3}
                                        autoComplete={"off"}
                                        value={message}
                                        className={"message-box"}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{}}>
                                    <button type='submit' className='submit-button-mobile'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className='break'/>
            </div>

            <div className='contact-info-container'>
                <div>
                    <h3 className='general-standard-header'>Contact information</h3>
                </div>
                <div className='contact-info-inner-container'>
                    <button style={{backgroundColor: 'transparent', height: '68px', padding: '0px', borderColor: 'transparent', textAlign: 'left', display: 'revert', color: 'black'}} onClick={() => window.open( "mailto: info@pictureitmobile.com?subject=Online Inquiry", '_self')}>
                        <div>
                            <p className='contact-text'>Email</p>
                            <h3 className='contact-info'>info@pictureitmobile.com</h3>
                        </div>
                    </button>
                    <button style={{backgroundColor: 'transparent', borderColor: 'transparent', textAlign: 'left'}} onClick={() => window.open( 'tel: 951-796-7321', '_self')}>
                        <div>
                            <p className='contact-text'>Number</p>
                            <h3 className='contact-info'>(951) 796-7321</h3>
                        </div>
                    </button>
                    <div>
                        <p className='contact-text'>Location</p>
                        <h3 className='contact-info'>Temecula, CA</h3>
                    </div>
                    <div>
                        <p className='contact-text'>Socials</p>
                        <div style={{display: 'flex'}}>
                            <IconButton icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-info-container-mobile'>
                <div>
                    <h3 className='general-standard-header'>Contact information</h3>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div >
                        <button style={{backgroundColor: 'transparent', height: '68px', padding: '0px', borderColor: 'transparent', textAlign: 'left', display: 'revert', color: 'black'}} onClick={() => window.open( "mailto: info@pictureitmobile.com?subject=Online Inquiry", '_self')}>
                            <div>
                                <p className='contact-text'>Email</p>
                                <h3 className='contact-info'>info@pictureitmobile.com</h3>
                            </div>
                        </button>
                        <div>
                            <p className='contact-text'>Location</p>
                            <h3 className='contact-info'>Temecula, CA</h3>
                        </div>
                    </div>
                    <div >
                        <button style={{backgroundColor: 'transparent', height: '68px', padding: '0px', borderColor: 'transparent', textAlign: 'left', display: 'revert', color: 'black'}} onClick={() => window.open( 'tel: 951-796-7321', '_self')}>
                            <div style={{padding: '0px'}}>
                                <p className='contact-text'>Number</p>
                                <h3 className='contact-info'>(951) 796-7321</h3>
                            </div>
                        </button>
                        <div>
                            <p className='contact-text'>Socials</p>
                            <div style={{display: 'flex'}}>
                                <IconButton icon={"fa-brands fa-facebook-f"} link={'https://www.facebook.com/pictureitmobile/'}/>
                                <div style={{marginLeft: '10px'}}>
                                    <IconButton icon={"fa-brands fa-instagram"} link={'https://www.instagram.com/pictureit.mobile/'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default ContactUs;