import '../App.css'
import HeroPicture from './HeroPicture';
import SignDrinks from './SignDrinks';
import CheersPic from '../pics/cheers.png'

const Hero = () => {
    return (
        <div id='profile' className='items-center mt-30'>
            <div className='md:flex justify-around px-4'> {/* Added padding for mobile breathing room */}
                <div className='shadow-lg border-3 border-[#252526] p-4 rounded-xl'>
                    <div className='flex flex-wrap'> {/* Added wrap to prevent text push */}
                        <h1 className='font-semibold text-xl'> 
                            My name is <span className='font-semibold text-3xl whitespace-nowrap'>Bekhruz Rakhmonov</span>
                        </h1>
                    </div>
                    <h1 className='font-semibold text-2xl mt-2'>Beverage Designer | Mixologist | Bar Specialist</h1>
                    
                    {/* Changed md:max-w-140 to a more flexible max-width */}
                    <div className='text-lg max-w-full md:max-w-2xl mt-4'>
                        <p>Five years of mastery in mixology and beverage design. I engineer high-end cocktail menus and bar programs that balance technical skill with aesthetic storytelling. From house-made infusions to high-volume operations, I create drinks that leave a lasting impression.</p>
                    </div>
                    
                    <div className='flex items-center mt-4'>
                        <h1 className='text-3xl font-bold italic'>Cheers!</h1>
                        <img className='w-20 invert brightness-0' src={CheersPic} alt="" />
                    </div>
                </div>

                {/* Added margin-top for mobile separation */}
                <div className='mt-8 md:mt-0'>
                    <HeroPicture />
                </div>
            </div>
            <SignDrinks />
        </div>
    )
}

export default Hero