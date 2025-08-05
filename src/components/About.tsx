import React, { useEffect, useState } from 'react';
import { Info } from '../User.tsx';
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from 'typewriter-effect';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResumeViewer from './ResumeViewer.tsx';
import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import { Particles } from './magicui/particles.tsx';
import { NeonGradientCard } from './magicui/neon-gradient-card.tsx';

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className='flex relative overflow-hidden vt323-regular items-center justify-around px-10 py-10 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6' id='bg'>
                <Particles
                    className="absolute inset-0 -z-20 h-full"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                <div className='bs:ml-20 font-mono flex flex-col w-3/5 lg-mx:gap-3 bs-mx:items-center md-mx:w-full' id='About'>
                    <div className='text-3xl text-primaryColor lg-mx:text-2xl sm-mx:text-xl'>Hi, I am</div>
                    <div className='text-white text-[4.25rem] font-bold font-mono lg-mx:text-5xl sm-mx:text-4xl'>{Info.name}</div>
                    <div className='text-white text-4xl flex lg-mx:text-[25px] sm-mx:text-2xl'>I'm a&nbsp;<span className='text-primaryColor font-semibold'><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /></span></div>
                    <div className='text-textColor text-xl my-8 lg-mx:my-0 text-justify w-[90%] font-semibold font-mono lg-mx:text-base'>{Info.bio}</div>
                    <div className='flex gap-3'>
                        <Button onClick={open} size='lg' variant="filled" color='#64FFDA' className='!text-bgColor !w-fit'>Check Resume </Button>
                        <Button size='lg' variant="outline" color='#64FFDA' className='!text-primaryColor !w-fit' rightSection={<IconDownload size={20} />} component='a' href='Resume.pdf' download={Info.name} > Download </Button>
                    </div>
                </div>
                <div className='h-fit flex justify-center items-center w-fit bs:mr-14 rounded-full' id='photo'>
                    <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center lg-mx:w-64 lg-mx:h-60">
                        <img className='w-80 h-80 rounded-full ' src="Ankit.jpg" alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}

export default About;