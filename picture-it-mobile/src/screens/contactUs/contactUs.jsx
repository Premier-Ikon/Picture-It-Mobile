import './contactUs.css';
import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

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

    const form = useRef();

    const {name, email, phone, address, date, message} = data

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
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
            "Please allow 24 business hours for a response. If your inquiry is urgent please call us at (951)458-3966")
    }

    return ( 
        <div>
            <div className='contact-header-container'>
                <div className='header-data-container'>
                    <div className='form-data-container'>
                        <div style={{marginBottom: '20px'}}>
                            <h3 className='general-standard-header'>Get In Touch With Us</h3>
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
                                            <label>Your address</label>
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
                    <div>
                        <img style={{height: '470px', marginLeft: '50%', marginTop: '40px'}} src={HeaderImage} alt="Camera"/>
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
                    <div>
                        <p className='contact-text'>Email</p>
                        <h3 className='contact-info'>info@pictureitmobile.com</h3>
                    </div>
                    <div>
                        <p className='contact-text'>Number</p>
                        <h3 className='contact-info'>(951) 796-7321</h3>
                    </div>
                    <div>
                        <p className='contact-text'>Location</p>
                        <h3 className='contact-info'>Temecula, CA</h3>
                    </div>
                    <div>
                        <p className='contact-text'>Socials</p>
                        <div style={{display: 'flex'}}>
                            <IconButton icon={"fa-brands fa-facebook-f"} link={''}/>
                            <div style={{marginLeft: '10px'}}>
                                <IconButton icon={"fa-brands fa-instagram"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default ContactUs;