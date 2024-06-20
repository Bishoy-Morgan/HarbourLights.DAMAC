import React, { useRef } from 'react'
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger)

const ImageSlider = () => {
    const Images = [
        '/Images/Rectangle 89.png',
        '/Images/Rectangle 90.png',
        '/Images/Rectangle 91 (1).png',
        '/Images/Rectangle 92 (1).png',
        '/Images/Rectangle 93.png'
    ]
    let imageSection = useRef(null)
    let containerA = useRef(null)
    let containerB = useRef(null)
    let containerC = useRef(null)
    let containerD = useRef(null)
    let containerE = useRef(null)
    useGSAP( () => {
        gsap.to(containerA, 1.2, {width: 0, ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: imageSection,
                start: 'top 70%',
                end: 'bottom 0%',
                ease: 'power3.inOut'
            }
        })
        gsap.to(containerB, 1.3, {width: 0, ease: Power3.easeInOut, delay: 1, 
            scrollTrigger: {
                trigger: imageSection,
                start: 'top 70%',
                end: 'bottom 0%',
                ease: 'power3.inOut'
            }
        })
        gsap.to(containerC, 1.3, {width: 0, ease: Power3.easeInOut, delay: 1.4, 
            scrollTrigger: {
                trigger: imageSection,
                start: 'top 70%',
                end: 'bottom 0%',
                ease: 'power3.inOut'
            }
        })
        gsap.to(containerD, 1.3, {width: 0, ease: Power3.easeInOut, delay: 1.8, 
            scrollTrigger: {
                trigger: imageSection,
                start: 'top 70%',
                end: 'bottom 0%',
                ease: 'power3.inOut'
            }
        })
        gsap.to(containerE, 1.3, {width: 0, ease: Power3.easeInOut, delay: 2.2, 
            scrollTrigger: {
                trigger: imageSection,
                start: 'top 70%',
                end: 'bottom 0%',
                ease: 'power3.inOut'
            }
        })
    })
    return (
        <section className='w-full pt-5 pb-10 md:pt-0 md:pb-0 md:h-screen flex justify-center items-center'>
            <div 
                ref={el => imageSection = el}
                className= 'group w-[90%] h-4/5 lg:w-4/5 lg:h-[90%] flex flex-col justify-between items-center'>
                <div className='relative w-full h-[70%] rounded-3xl'>
                    <div 
                        ref={el => containerA = el}
                        className='absolute top-0 right-0 w-full h-full bg-white'></div>
                    <img 
                        className='w-full h-full'
                        src={Images[0]} alt='Exterior of our apartments'/>
                    <button className='opacity-0 group-hover:opacity-100 opacity absolute z-50 top-1/2 left-7 p-2 rounded-full flex justify-center items-center bg-[#FCFCFC]'>
                        <IoIosArrowBack 
                            className='text-[#00357B] text-2xl lg:text-3xl' />
                    </button>
                    <button className='opacity-0 group-hover:opacity-100 absolute z-50 top-1/2 right-7 p-2 rounded-full flex justify-center items-center bg-[#FCFCFC]'>
                        <IoIosArrowForward 
                            className='text-[#00357B] text-2xl lg:text-3xl' />
                    </button>
                </div>
                <div className='w-full h-[28%] mt-2 flex justify-between items-center '>
                    <div className='relative w-[24%] h-full'>
                        <div 
                            ref={el => containerB = el}
                            className='absolute top-0 right-0 w-full h-full bg-white'></div>
                        <img 
                            className='w-full h-full'
                            src={Images[1]} alt='Bathroom of our apartment' />
                    </div>
                    <div className='relative w-[24%] h-full'>
                        <div 
                            ref={el => containerC = el}
                            className='absolute top-0 right-0 w-full h-full bg-white'></div>
                        <img 
                            className='w-full h-full'
                            src={Images[2]} alt='Interior swimming pool' />
                    </div>
                    <div className='relative w-[24%] h-full'>
                        <div 
                            ref={el => containerD = el}
                            className='absolute top-0 right-0 w-full h-full bg-white'></div>
                        <img 
                            className='w-full h-full'
                            src={Images[3]} alt='interior of our reseption' />
                    </div>
                    <div className='relative w-[24%] h-full'>
                        <div 
                            ref={el => containerE = el}
                            className='absolute top-0 right-0 w-full h-full bg-white'></div>
                        <img 
                            className='w-full h-full'
                            src={Images[4]} alt='Bedrooms interior' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageSlider
