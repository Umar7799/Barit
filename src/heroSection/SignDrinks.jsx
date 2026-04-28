import dragonSourPic from '../pics/dragonSour.png'
import PinkLadyPic from '../pics/pinkLady.png'
import JadeFizzPic from '../pics/jadeFizz.png'
import DragonIcon from '../pics/dragonIcon.png'
import JadeIcon from '../pics/jadeIcon.png'
import PinkIcon from '../pics/PinkIcon.png'
import '../App.css'

const SignDrinks = () => {



    return (
        <div className='signature'>
            <div className='flex justify-center mt-10 text-3xl font-bold'>
                <h1>SIGNATURE THREE</h1>
            </div>
            <div className='flex justify-center gap-20 mt-4 mb-10'>
                <div className='lg:flex space-x-4 space-y-4 lg:space-y-0 p-4'>
                    {/* DRAGON SOUR */}
                    <div className='shadow border-2 border-[#252526] rounded-xl p-4'>
                        <div className='flex justify-between pb-2'>
                            <h1>DRAGON SOUR</h1>
                            <div className='flex items-center space-x-0.5 text-sm'>
                                <img className='h-6 invert brightness-0' src={DragonIcon} alt="" />
                                <h1>SOUR</h1>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div class="w-30 h-30">
                                <img src={dragonSourPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                            </div>
                            <div className='border-l-3 rounded-xl shadow-2xl border-[#252526] text-sm pt-2 px-2 pr-12'>
                                <h1>Yuzu</h1>
                                <h1>Lime Juice</h1>
                                <h1>Coconut Puree</h1>
                                <h1>Pineapple Juice</h1>
                                <h1>Top up: Ginger ale</h1>
                            </div>
                        </div>
                    </div>

                    {/* PINK LADY */}
                    <div className='shadow border-2 border-[#252526] rounded-xl p-4'>
                        <div className='flex justify-between pb-2'>
                            <h1>PINK LADY</h1>
                            <div className='flex items-center space-x-0.5 text-sm'>
                                <img className='h-6 invert brightness-0' src={PinkIcon} alt="" />
                                <h1>SWEET</h1>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div class="w-30 h-30">
                                <img src={PinkLadyPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                            </div>
                            <div className='border-l-3 rounded-xl shadow-2xl border-[#252526] px-2 pr-12 text-sm pt-2'>
                                <h1>Raspberry Puree</h1>
                                <h1>Ginger Juice</h1>
                                <h1>Yuzu</h1>
                                <h1>Raspberry Syrup</h1>
                                <h1>Top up: 7 up</h1>
                            </div>
                        </div>
                    </div>

                    
                    {/* JADE FIZZ */}

                    <div className='shadow border-2 border-[#252526] rounded-xl p-4'>
                        <div className='flex justify-between pb-2'>
                            <h1>PINK LADY</h1>
                            <div className='flex items-center space-x-0.5 text-sm'>
                                <img className='h-6 invert brightness-0' src={JadeIcon} alt="" />
                                <h1>SWEET</h1>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div class="w-30 h-30">
                                <img src={JadeFizzPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                            </div>
                            <div className='border-l-3 rounded-xl shadow-2xl border-[#252526] px-2 pr-12 text-sm pt-2'>
                            <h1>Cucumber Juice</h1>
                                <h1>Passion Fruite Puree</h1>
                                <h1>Vanilla Syrup</h1>
                                <h1>Apple Juice</h1>
                                <h1>Top up: Soda</h1>
                            </div>
                        </div>
                    </div>

                   
                </div>

            </div>
        </div>

    )
}


export default SignDrinks