import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import {useState,useEffect,useRef} from'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, MapContainer,TileLayer } from 'react-leaflet';
import markerIcon from '../../assets/images/marker-icon.png';
import L from 'leaflet';


  
 

const Contact =()=>{
    const[letterClass,setLetterCase]=useState('text-animate');
    const refForm=useRef();
     useEffect(()=>{
     setTimeout(() => {
        setLetterCase('text-animate-hover')
     }, 3000);   
    });

    const defaultMarkerIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });
    
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_s5fek6k','template_sn3ssmq',refForm.current,'YJZTFgPREn-G3w2x1')
       
        .then(
            (response) => {
              console.log('Success:', response);
              alert('Message Successfully Sent!');
              window.location.reload(false);
            },
            (error) => {
              console.log('Error:', error);
              alert('Failed to send the message, please try again.');
            }
          );  
        
    }
    return (
        <>
        <div className='container contact-page'>
           <div className='text-zone'>s
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}/>
            </h1>
            <p>
            I am interested in freelance opportunities especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea
                            placeholder='Message'
                            name='message'
                            required>
                            </textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>

            </div>
           </div>
           <div className='info-map'>
            Ananya Misra,
            <br/>
            INDIA,
            <br/>
            District 13 Baker Street, Near the Mart Lane,<br/>
            Lucknow, Uttar Pradesh <br/>
            <span>anumisra2@gmail.com</span>
           </div>
           <div className='map-wrap'>
            <MapContainer center={[26.880410, 80.991520]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[26.880410, 80.991520]} icon={defaultMarkerIcon} >
                <Popup>
                Let's have coffee.
                </Popup>
            </Marker>
            </MapContainer>
      

           </div>
        </div>
        <Loader type='pacman'/>

        </>
    )
}

export default Contact;
