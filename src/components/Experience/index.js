import './index.scss'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import logo from '../../assets/images/unthinkable_logo.jpg'
import AnimatedLetters from "../AnimatedLetters";
import {useState,useEffect} from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';


const ExperienceCard=({experience})=>(

    <VerticalTimelineElement contentStyle={{background:'rgba(25,25,25, 0.5)',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:'green'}}
    icon={<div className='flex justify-center items-center w-full h-full'>
        <img src={logo}
        alt={logo}
        className='w-[60%] h-[60%]
        object-contain'/>
    </div>}
  
    >
       
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point,index)=>(
                <li key={'experience-point-${index}'}
                className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}

                </li>
            ))}
              <p>{experience.date}</p>
        </ul>
 
    </VerticalTimelineElement>
)

const Experience=()=>{

    const[letterClass,setLetterCase]=useState('text-animate');
    useEffect(()=>{
        setTimeout(() => {
           setLetterCase('text-animate-hover')
           
        }, 3000);   
    },[]);
return(
    <>
<div className="container experience-page">
       <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['W','o','r','k',' ','E','x','p',' e','r','i','e','n','c','e']}
                    idx={15}

                    />
                </h1>
        </div>
        <br/>
        <div className="timeline flex flex-col justify-center items-center">
            <VerticalTimeline>
                {experiences.map((experience,index) =>
                 (<ExperienceCard key={index} experience={experience} />))}
            </VerticalTimeline>
        </div>
        </div>
        </>
        )

}
export default Experience;