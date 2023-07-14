import './index.scss'
import LogoTitle from '../../assets/images/image3.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo';
import Loader from 'react-loaders';
import {useState, useEffect} from "react"
const Home=()=>{
    const[letterClass,setLetterCase]=useState('text-animate');
    const nameArray=['n','a','n','y','a']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(()=>{
     setTimeout(() => {
        setLetterCase('text-animate-hover')
     }, 4000);   
    },[]);
    return (
        <>
              <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
              <AnimatedLetters letterClass={letterClass}
               strArray={nameArray}
               idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
               strArray={jobArray}
               idx={20}/>
                </h1>
                <h2>Frontend Developer / .Net Core Developer / Freelancer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
      </>
  
    )
}

export default Home;
