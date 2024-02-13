import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation } from '../motion';
import state from '../store';
import { CustomButton } from '../Components';

const Home = () => {
    const snap = useSnapshot(state);
    const logoTexture = snap.logoDecal;


  return (
    <AnimatePresence>
        {
            snap.intro&&(
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src = {logoTexture} alt ="logo" className='w-8 h-8 object-contain'/>
                    </motion.header>
                  
                     <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                MAKE <br className='xl:block hidden'/> IT YOURS
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-white text-base'>
                                Create your own stylized shirt with this 3D customization tool. <strong>Change colors and upload your own images</strong>{" "}
                                to define your own style
                            </p>

                            <CustomButton type="filled" title="Customize It" handleClick={()=>state.intro=false} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                            </motion.div>
                    </motion.div>
                   

                  
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Home