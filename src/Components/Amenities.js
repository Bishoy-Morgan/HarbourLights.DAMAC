import { useRef } from 'react'
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Amenities = () => {
    let companyName = useRef(null)
    let companyFeatures = useRef(null)
    let firstContainer = useRef(null)
    let secondContainer = useRef(null)
    let thirdContainer = useRef(null)
    let fourthContainer = useRef(null)
    useGSAP( () => {
        gsap.fromTo(companyName, 1, { opacity: 0, y: 10, x: -20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut ,
            scrollTrigger: {
                trigger: companyFeatures,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(companyFeatures, 1, { opacity: 0, y: 10, x: 20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: companyFeatures,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(firstContainer, 1, { opacity: 0, y: 10, x: -20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut ,
            scrollTrigger: {
                trigger: firstContainer,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(secondContainer, 1, { opacity: 0, y: 10, x: -20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: secondContainer,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(thirdContainer, 1, { opacity: 0, y: 10, x: 20}, { opacity: 1, y: 0, x: 0 ,ease: Power3.easeInOut, 
            scrollTrigger: {
                trigger: thirdContainer,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
        gsap.fromTo(fourthContainer, 1, { opacity: 0, y: 10, x: 20}, { opacity: 1, y: 0, x: 0, ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: fourthContainer,
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: 5,
                ease: 'power3.inOut'
            }
        })
    })
    return (
        <section className='w-full h-auto pt-12 flex flex-col justify-center items-center'>
            <div className='w-4/5 flex flex-col justify-center items-center'>
                <img 
                    ref={el => companyName = el}
                    className='min-w-[180px] min-h-[80px]'
                    src='/Images/Слой_x0020_1.png' alt='Harbour Lights de GRISOGONO'/>
                <div 
                    ref={el => companyFeatures = el}
                    className='w-[98%] md:w-4/5 lg:w-[70%] mt-5 mb-12 md:mt-12 text-center'>
                    <h2 className='text-[#00357B] text-3xl md:text-4xl font-medium font-[Oswald] mb-5'>features & Amenities</h2>
                    <p className='text-[#343434] text-base font-normal'>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
                </div>
                <div className='w-full xl:h-[280px] grid grid-cols-2 grid-rows-2 gap-10 lg:flex justify-between items-center'>
                    <div
                        ref={el => firstContainer = el}
                        className='shiny-border relative w-1/5 min-w-36 md:min-w-52 h-full min-h-44 md:min-h-[270px] flex flex-col justify-evenly items-center rounded-3xl shadow-2xl'>
                        <div className='img-container relative w-[80%] h-3/5 lg:h-[50%] 2xl:h-3/5 rounded-full bg-[#D9D9D9]/50 flex items-center justify-center'>
                            <img 
                                className='w-[95%] 2xl:w-[92%] z-50'
                                src='/Images/Ellipse 7.png' alt='Floating Pools' />
                        </div>
                        <div className='w-4/5 h-1/4 flex justify-center items-center'>
                            <h4 className='text-[#00357B] text-xs md:text-base font-semibold text-center'>Floating<br/>Pools</h4>
                        </div>
                    </div>
                    <div 
                        ref={el => secondContainer = el}
                        className='shiny-border relative w-1/5 min-w-36 md:min-w-52 h-full min-h-44 md:min-h-[270px] flex flex-col justify-evenly items-center rounded-3xl shadow-2xl'>
                        <div className='img-container relative w-[80%] h-3/5 lg:h-[50%] 2xl:h-3/5 rounded-full bg-[#D9D9D9]/50 flex items-center justify-center'>
                            <img 
                                className='w-[95%] 2xl:w-[92%] z-50'
                                src='/Images/Ellipse 7 (1).png' alt='Spacious Cabins Like Rooms' />
                        </div>
                        <div className='w-4/5 h-1/4 flex justify-center items-center'>
                            <h4 className='text-[#00357B] text-xs md:text-base font-semibold text-center'>Spacious Cabins<br/>Like Rooms</h4>
                        </div>
                    </div>
                    <div 
                        ref={el => thirdContainer = el}
                        className='shiny-border relative w-1/5 min-w-36 md:min-w-52 h-full min-h-44 md:min-h-[270px] flex flex-col justify-evenly items-center rounded-3xl shadow-2xl'>
                        <div className='img-container relative w-[80%] h-3/5 lg:h-[50%] 2xl:h-3/5 rounded-full bg-[#D9D9D9]/50 flex items-center justify-center'>
                            <img 
                                className='w-[95%] 2xl:w-[92%] z-50'
                                src='/Images/Ellipse 7 (3).png' alt='Sea Facing Swimming Pools' />
                        </div>
                        <div className='w-4/5 h-1/4 flex justify-center items-center'>
                            <h4 className='text-[#00357B] text-xs md:text-base font-semibold text-center'>Sea Facing<br/>Swimming Pools</h4>
                        </div>
                    </div>
                    <div 
                        ref={el => fourthContainer = el}
                        className='shiny-border relative w-1/5 min-w-36 md:min-w-52 h-full min-h-44 md:min-h-[270px] flex flex-col justify-evenly items-center rounded-3xl shadow-2xl'>
                        <div className='img-container relative w-[80%] h-3/5 lg:h-[50%] 2xl:h-3/5 rounded-full bg-[#D9D9D9]/50 flex items-center justify-center'>
                            <img 
                                className='w-[95%] 2xl:w-[92%] z-50'
                                src='/Images/Ellipse 7 (2).png' alt='Gymnasium & FItness' />
                        </div>
                        <div className='w-4/5 h-1/4 flex justify-center items-center'>
                            <h4 className='text-[#00357B] text-xs md:text-base font-semibold text-center'>Gymnasium<br/>& FItness</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-4/5 py-5 flex flex-col justify-center items-center lg:items-end mt-5'>
                <span className='text-[10px] text-[#686868] font-light text-center lg:text-right'>*T&Cs apply | ** Based on similar branded projects in the last 2 years. <u>Source 1</u> | <u>Source 2</u></span>
                <div className='w-auto lg:w-2/5 mt-12 flex justify-center lg:justify-end'>
                    <button className='w-40 h-12 text-[13px] rounded-lg bg-[#00357B] font-bold text-[#FCFCFC] mr-5 hover:bg-[#FCFCFC] hover:border-2 hover:text-[#00357B] hover:border-[#00357B] hover:scale-105 hover:shadow-md hover:shadow-[#00357B]'>EXTERIORS</button>
                    <button className='w-40 h-12 text-[13px] rounded-lg bg-[#FCFCFC] border-2 border-[#00357B] font-bold text-[#00357B] hover:scale-105 hover:shadow-md hover:shadow-[#00357B] '>INTERIORS</button>
                </div>
            </div>
        </section>
    )
}

export default Amenities
