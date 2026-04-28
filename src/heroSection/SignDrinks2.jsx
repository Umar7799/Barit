import { useState } from 'react'
import { motion } from 'framer-motion'
import dragonSourPic from '../pics/dragonSour.png'
import PinkLadyPic from '../pics/pinkLady.png'
import JadeFizzPic from '../pics/jadeFizz.png'
import DownIcon from '../pics/arrow-down.png'
import DragonIcon from '../pics/dragonIcon.png'
import JadeIcon from '../pics/jadeIcon.png'
import PinkIcon from '../pics/PinkIcon.png'
import '../App.css'

const SignDrinks2 = () => {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='flex justify-center gap-20 mt-10 mb-10'>



            <div>
                <motion.div
                    transition={{ layout: { duration: 1, type: "spring" } }}
                    layout
                    className='card border-2 border-[#b3b3b3] rounded-lg shadow-2xl/30'
                >
                    <motion.h2 onClick={() => { setIsOpen(!isOpen) }} layout="position"
                        className={isOpen ? 'text-[#f5f5f5] font-semibold cursor-pointer underline p-1' :
                            'text-[#f5f5f5] p-2 font-semibold cursor-pointer'}>
                        <div className={isOpen ? 'hidden' : 'p-2'}>
                            <h3>SIGNATURE THREE</h3>
                            <div className='flex justify-center'>
                                <img className='invert brightness-0 h-8' src={DownIcon} alt="" />
                            </div>
                        </div>

                    </motion.h2>
                    {isOpen &&

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='expand'>
                            <div className='flex space-x-4 p-4'>
                                {/* DRAGON SOUR */}
                                <div className=' border border-white rounded-xl p-4'>
                                    <div className='flex justify-between pb-2'>
                                        <h1>DRAGON SOUR</h1>
                                        <div className='flex items-center space-x-0.5'>
                                            <img className='h-6 invert brightness-0' src={DragonIcon} alt="" />
                                            <h1>SOUR</h1>
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div class="w-30 h-30">
                                            <img src={dragonSourPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                                        </div>
                                        <div className='border-l-2 rounded-xl shadow-2xl border-[#b3b3b3] px-2 pr-12'>
                                            <h1>Yuzu</h1>
                                            <h1>Lime Juice</h1>
                                            <h1>Coconut Puree</h1>
                                            <h1>Pineapple Juice</h1>
                                            <h1>Top up: Ginger ale</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* PINK LADY */}
                                <div className=' border border-white rounded-xl p-4'>
                                    <div className='flex justify-between pb-2'>
                                        <h1>PINK LADY</h1>
                                        <div className='flex items-center space-x-0.5'>
                                            <img className='h-6 invert brightness-0' src={PinkIcon} alt="" />
                                            <h1>SWEET</h1>
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div class="w-30 h-30">
                                            <img src={PinkLadyPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                                        </div>
                                        <div className='border-l-2 rounded-xl shadow-2xl border-[#b3b3b3] px-2 pr-12'>
                                            <h1>Raspberry Puree</h1>
                                            <h1>Ginger Juice</h1>
                                            <h1>Yuzu</h1>
                                            <h1>Raspberry Syrup</h1>
                                            <h1>Top up: 7 up</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* JADE FIZZ */}
                                <div className=' border border-white rounded-xl p-4'>
                                    <div className='flex justify-between pb-2'>
                                        <h1>JADE FIZZ</h1>
                                        <div className='flex items-center space-x-0.5'>
                                            <img className='h-6 invert brightness-0' src={JadeIcon} alt="" />
                                            <h1>EXOTIC</h1>
                                        </div>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div class="w-30 h-30">
                                            <img src={JadeFizzPic} class="w-full h-full object-cover rounded-lg shadow-xl" />
                                        </div>
                                        <div className='border-l-2 rounded-xl shadow-2xl border-[#b3b3b3] px-2 pr-12'>
                                            <h1>Cucumber Juice</h1>
                                            <h1>Passion Fruite Puree</h1>
                                            <h1>Vanilla Syrup</h1>
                                            <h1>Apple Juice</h1>
                                            <h1>Top up: Soda</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => { setIsOpen(!isOpen) }} className='flex justify-center items-center mb-2 cursor-pointer'>
                                <h1 className='text-xl flex border border-white rounded-xl px-2 py-1'>Close <img className='invert brightness-0 h-7 rotate-180' src={DownIcon} alt="" /></h1>
                            </div>
                        </motion.div>

                    }

                </motion.div>

            </div>



        </div>

    )
}


export default SignDrinks2