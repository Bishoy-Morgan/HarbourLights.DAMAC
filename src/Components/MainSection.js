import { useRef } from 'react'
import gsap, { Power3 } from 'gsap';
import { useGSAP } from '@gsap/react'
import Header from './Header'

const MainSection = () => {
    let mainTitle = useRef(null)
    let priceContainer = useRef(null)
    useGSAP( () => {
        gsap.fromTo(mainTitle, 2, {opacity: 0, y: 20, x: -20}, {opacity: 1, y: 0, x: 0, ease: Power3.easeInOut})
        gsap.fromTo(priceContainer, 2, {opacity: 0, y: 20, x: 20}, {opacity: 1, y: 0, x: 0, ease: Power3.easeInOut})
    })
    return (
        <main className='w-full min-h-[950px] lg:min-h-screen'>
            <Header />
            <section className='w-4/5 lg:h-[70%] md:pb-0 absolute z-50 top-[8%] lg:top-1/2 lg:-translate-y-[35%] left-1/2 -translate-x-1/2 flex flex-col lg:flex-row lg:justify-between items-center'>
                <div 
                    ref={el => mainTitle = el}
                    className='w-full min-h-[350px] md:w-4/5 lg:w-1/2 lg:h-full xl:w-[45%] flex-none md:min-h-full flex flex-col justify-evenly'>
                    <div className='w-full h-2/3 md:h-1/2 flex flex-col justify-around'>
                        <h1 className='text-4xl lg:text-5xl lg:leading-tight font-medium uppercase mb-2 xl:mb-0'>Harbour Lights<br/> de<h1 className='text-[#17ABFF] inline'> GRESOGONO</h1></h1>
                        <span className='text-[14px] lg:text-[25px] font-bold leading-[33px] tracking-wide'>1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</span>
                    </div>
                    <div className='w-full md:w-4/5 lg:w-[90%] xl:w-4/5 h-1/3 md:flex md:flex-col md:justify-evenly '>
                        <div className='w-full py-3 px-5 mb-4 xl:mb-0 border-l-4 border-[#17ABFF] bg-black/50 lg:bg-black/30'>
                            <span className='text-xs md:text-sm font-normal text-[#E7EBEF] tracking-wider'>Rental Returns of <span className='font-[600] text-sm md:text-base'>UPTO 11%**</span></span>
                        </div>
                        <div className='w-full py-3 px-5  border-l-4 border-[#17ABFF] bg-black/50 lg:bg-black/30'>
                            <span className='text-xs md:text-sm font-normal text-[#E7EBEF] tracking-wider'>Capital Appreciation of <span className='font-[600] text-sm md:text-base'>UPTO 32%**</span></span>
                        </div>
                    </div>
                </div>
                <div 
                    ref={el => priceContainer = el}
                    className='price-container relative w-[98%] h-[400px] mt-10 lg:-mt-16 md:h-[320px] lg:w-[305px] backdrop-blur-md rounded-xl md:flex md:flex-col md:justify-between'>
                    <div className='w-full h-4/5 px-5 py-4  text-[#FCFCFC] font-[Oswald] flex flex-col justify-center'>
                        <h4 className='text-[13px] tracking-[.2rem] md:tracking-[0.15rem] font-[Poppins]'>PRICING STARTS FROM</h4>
                        <h3 className='text-5xl my-3'>$ 425,000</h3>
                        <span className='tracking-wider text-2xl'>AED 1.3 Million</span>
                        <button className='z-50 w-64 h-12 mt-5 text-[#FCFCFC] bg-[#17ABFF] rounded-md text-xs tracking-widest font-[Poppins] font-bold border border-transparent hover:border hover:border-[#17ABFF] hover:text-[#17ABFF] hover:bg-transparent hover:scale-105 hover:shadow hover:shadow-[#17ABFF]'>GET A PRESENTATION</button>
                    </div>
                    <div className='w-full h-1/5 px-3 bg-[#5790BE]/10 font-[Poppins] flex justify-center items-center rounded-b-xl shadow-inner shadow-black/50'>
                        <span className='text-xs md:text-[13px] lg:text-[11px] xl:text-[13px] text-[#98C5E8] tracking-wider'>Get an Expert&#39;s Presentation of Real <br/> Estate in Dubai for Life and investment</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default MainSection
