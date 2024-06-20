import { useRef } from 'react'
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    let firstFeature = useRef(null)
    let secondFeature = useRef(null)
    let thirdFeature = useRef(null)
    let fourthFeature = useRef(null)
    useGSAP( () => {
        gsap.fromTo(firstFeature, 1, { opacity: 0, y: 10, x: -20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut ,
            scrollTrigger: {
                trigger: firstFeature,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(secondFeature, 1, { opacity: 0, y: 10, x: -20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: firstFeature,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(thirdFeature, 1, { opacity: 0, y: 10, x: 20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: firstFeature,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(fourthFeature, 1, { opacity: 0, y: 10, x: 20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: firstFeature,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
    })
    return (
        <section className='w-full bg-[#F4F9FF] min-h-52 p-5 flex flex-col justify-center items-center'>
            <div className='w-[98%] md:w-4/5 min-h-36 flex justify-around items-center text-[#00357B] overflow-hidden'>
                <div 
                    ref={el => firstFeature = el}
                    className='min-w-44 min-h-36 h-[90%] flex flex-col justify-center items-center max-md:hidden'>
                    <img
                        className='w-[50px] h-12'
                        src='/Images/Group 132.png' alt='20% when book with website' />
                    <h4 className='mt-4 text-xs'>BOOK WITH</h4>
                    <h3 className='text-2xl md:text-3xl font-medium font-[Oswald] tracking-wider uppercase'>Only 20%</h3>
                </div>
                <div 
                    ref={el => secondFeature = el}
                    className='min-w-44 min-h-36 h-[90%] flex flex-col justify-center items-center'>
                    <img
                        className='w-[50px] h-12'
                        src='/Images/Group.png' alt='Easy payment plan' />
                    <h4 className='mt-4 text-xs'>PAYMENT PLAN</h4>
                    <h3 className='text-2xl md:text-3xl font-medium font-[Oswald] tracking-wider uppercase'>Easy 70/30</h3>
                </div>
                <div 
                    ref={el => thirdFeature = el}
                    className='min-w-44 min-h-36 h-[90%] flex flex-col justify-center items-center'>
                    <img
                        className='w-[50px] h-12'
                        src='/Images/Group 16.png' alt='Handover on Q2 2027' />
                    <h4 className='mt-4 text-xs'>HANDOVER ON</h4>
                    <h3 className='text-2xl md:text-3xl font-medium font-[Oswald] tracking-wider uppercase'>Q2 2027</h3></div>
                <div 
                    ref={el => fourthFeature = el}
                    className='min-w-44 min-h-36 h-[90%] flex flex-col justify-center items-center max-md:hidden'>
                    <img
                        className='w-[50px] h-12'
                        src='/Images/Group 40.png' alt='Area start from 700 SQMT' />
                    <h4 className='mt-4 text-xs'>AREA STARTS FROM</h4>
                    <h3 className='text-2xl md:text-3xl font-medium font-[Oswald] tracking-wider uppercase'>700 sqmt</h3></div>
            </div>
            <div className='w-[98%] md:w-4/5 h-5 pt-1 flex justify-around items-start'>
                <div className='w-[70px] h-[5px] bg-[#00357B]/10 rounded-full max-md:hidden'></div>
                <div className='w-[70px] h-[5px] bg-[#00357B]/10 rounded-full '></div>
                <div className='w-[70px] h-[5px] bg-[#00357B]/10 rounded-full '></div>
                <div className='w-[70px] h-[5px] bg-[#00357B]/10 rounded-full max-md:hidden'></div>
            </div>
        </section>
    )
}

export default Features
