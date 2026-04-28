import { useState, useEffect } from 'react';
import '../App.css'
import LogoPic from '../pics/logoa.png'
import ResumePdf from '../pics/BekhruzResu.pdf'
import { animateScroll as scroll, Link } from 'react-scroll';
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHamBurgerOpen, setHamburgerOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', controlNavbar);

        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 z-50 w-full transition-transform duration-300
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            border-b rounded-b-xl border-[#f5f5f5] bg-[##0c0c0d] backdrop-blur-md shadow-xl 
            flex justify-between px-5 md:px-10 py-2 items-center`}>

            <div onClick={() => scroll.scrollToTop()} className="flex items-center font-semibold text-2xl italic cursor-pointer z-110">
                <img className='w-12 invert brightness-0' src={LogoPic} alt="Logo" />
                <h1 className="text-[#f5f5f5]">Bekhruz</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-semibold text-[#f5f5f5]">
                <Link to="profile" smooth={true} spy={true} offset={-100} className="cursor-pointer hover:text-brand-accent"><h1>Profile</h1></Link>
                <Link to="signature" smooth={true} spy={true} offset={-100} className="cursor-pointer hover:text-brand-accent"><h1>Signature</h1></Link>
                <Link to="journey" smooth={true} spy={true} offset={-100} className="cursor-pointer hover:text-brand-accent"><h1>Journey</h1></Link>
                <Link to="portfolio" smooth={true} spy={true} offset={0} className="cursor-pointer hover:text-brand-accent"><h1>Portfolio</h1></Link>
                <Link to="contact" smooth={true} spy={true} offset={-50} className="cursor-pointer hover:text-brand-accent"><h1>Contact</h1></Link>

                <div className="border-2 border-[#f5f5f5] rounded-lg px-2 py-1 cursor-pointer hover:bg-white hover:text-black transition-colors">
                    <h1><a href={ResumePdf} target="_blank" rel="noopener noreferrer">Resume</a></h1>
                </div>
            </div>

            {/* Hamburger Icon */}
            <div className='relative z-110 md:hidden'>
                <Hamburger color='white' toggled={isHamBurgerOpen} toggle={setHamburgerOpen} size={25} />
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 h-screen w-full bg-[#252526] bg-opacity-95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center
                ${isHamBurgerOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className='text-2xl pt-15 font-semibold space-y-8 text-center text-white'>
                    <Link to="profile" smooth={true} offset={-100} onClick={() => setHamburgerOpen(false)} className="block cursor-pointer">Profile</Link>
                    <Link to="signature" smooth={true} offset={-100} onClick={() => setHamburgerOpen(false)} className="block cursor-pointer">Signature</Link>
                    <Link to="journey" smooth={true} offset={-100} onClick={() => setHamburgerOpen(false)} className="block cursor-pointer">Journey</Link>
                    <Link to="portfolio" smooth={true} offset={0} onClick={() => setHamburgerOpen(false)} className="block cursor-pointer">Portfolio</Link>
                    <Link to="contact" smooth={true} offset={-50} onClick={() => setHamburgerOpen(false)} className="block cursor-pointer">Contact</Link>

                    <div className="border-2 border-white rounded-lg px-6 py-2 mx-auto w-fit">
                        <h1>Resume</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;