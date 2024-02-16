import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useState,useEffect,useRef} from'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import github from '../../assets/images/github.png';
import {projects} from '../../constants';
import { fadeIn} from './motion';

const ProjectCard=({index, name, description,tags,image,source_code_link})=>{
    return (
        <motion.div
            initial={{y:70}}
            animate={{y:0}}
            transition={{delay:index*0.5, duration:1.5, type:'spring', stiffness:120}}
        >

            <Tilt options={{
                max:45,
                scale:1,
                speed:450}} 
                className="p-5 rounded-2xl sm:w-[360px] w-full project-card">
                  <div className='relative h-[230px] flex justify-center items-center'>
                    <img src={image}
                    alt={name}
                    className='w-full h-full object-cover rounded-2xl'/>
                  <div className='absolute inset-5 flex justify-end card-img_hover'>
                    <div onClick={()=>window.open(source_code_link,"_blank")}
                    className='bg-slate-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                      <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>

                    </div>
                  </div>
                  </div>
                  <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-white text-[14px]'>{description}</p>

                  </div>
                </Tilt>
            </motion.div>

    )
}
const Project=()=>{
    const[letterClass,setLetterCase]=useState('text-animate');
     useEffect(()=>{
     setTimeout(() => {
        setLetterCase('text-animate-hover')
     }, 3000);   
    });
    return<>
         <div className='container project-page'>
          <br/>
           <div className='text-zone'>
            {<h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['P','r','o','j','e','c','t','s']}
                idx={15}/>
            </h1>}
        
            </div>
           <div className='flex flex-wrap gap-7 project-section items-center justify-center'>
            {projects.map((project,index)=>(
              <ProjectCard key={`project-${index}`}
              index={index+2}
              {...project}/>
            ))}
            </div>
       
          
           </div>
        
           <Loader type='pacman'/>
    </>
}

export default Project;