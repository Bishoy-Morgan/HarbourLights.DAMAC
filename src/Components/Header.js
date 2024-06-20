import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
    
    return (
        <header className='absolute z-50 top-0 left-1/2 -translate-x-1/2 w-4/5 h-20 lg:h-24 bg-transparent flex justify-between items-center'>
            <img 
                className='w-20 lg:w-36'
                src='/Images/Logo.png' alt='Logo' />
            <button className='min-[435px]:block hidden w-[185px] h-12 hover:backdrop-blur-md hover:scale-105 hover:shadow-sm hover:shadow-[#17ABFF] text-[#17ABFF] border-2 border-[#17ABFF] rounded-md text-sm tracking-wider font-semibold'>ENQUIRE NOW</button>       
            <button className='min-[435px]:hidden text-[#FCFCFC] text-4xl'><MdOutlineMenu /></button>
        </header>
    )
}

export default Header
