import { useState } from 'react'
import { motion } from 'framer-motion'

import InstagramPic from '../pics/instagram.png'
import TelegramPic from '../pics/telegram.png'
import WhatsappPic from '../pics/whatsapp.png'
import PhonePic from '../pics/phone-call.png'
import GmailPic from '../pics/gmail.png'
import EmailPic from '../pics/email.png'

const Bottom = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div id='contact' className="mt-5">
            <div className='flex justify-center  mb-20'>
                <motion.div transition={{ layout: { duration: 1, type: "spring" } }} layout className='border-2 border-[#b3b3b3] rounded-lg shadow-2xl/30'>
                    <motion.h2 onClick={() => { setIsOpen(!isOpen) }} layout="position"
                        className={isOpen ? 'text-[#f5f5f5] font-semibold cursor-pointer underline p-1' :
                            'text-[#f5f5f5] p-2 font-semibold cursor-pointer'}>
                        <div className={isOpen ? 'flex justify-center p-2' : 'p-2 flex justify-center'}>
                            <h3>SAY HELLO</h3>
                            <div className='flex justify-center'>
                            </div>
                        </div>
                    </motion.h2>

                    {isOpen &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='expand'>
                            <div className='flex p-5'>

                                <div className='md:flex space-y-5 md:space-y-0 space-x-10'>

                                    <div className='space-y-5'>
                                        <div>
                                            <a className='flex items-center space-x-2' href="https://instagram.com/inakov_b?igshid=MzNlNGNkZWQ4Mg=="><img className='w-10' src={InstagramPic} alt="" /><h1 className='underline'>Inakov_b</h1></a>
                                        </div>
                                        <div>
                                            <a className='flex items-center space-x-2' href=""><img className='w-10' src={TelegramPic} alt="" /><h1 className='underline'>@Nohow_7799</h1></a>
                                        </div>
                                    </div>
                                    <div className='space-y-5'>
                                        <div>
                                            <a className='flex items-center space-x-2' href=""><img className='w-10' src={WhatsappPic} alt="" /><h1 className='underline'>+966 573 705 996</h1></a>
                                        </div>
                                        <div>
                                            <a className='flex items-center space-x-2' href=""><img className='w-10' src={PhonePic} alt="" /><h1 className='underline'>+998 91 480 80 07</h1></a>
                                        </div>
                                    </div>
                                    <div className='space-y-5'>
                                        <div>
                                            <a className='flex items-center space-x-2' href=""><img className='w-10' src={GmailPic} alt="" /><h1 className='underline'>+966 573 705 996</h1></a>
                                        </div>
                                        <div>
                                            <a className='flex items-center space-x-2' href=""><img className='w-10 invert brightness-0' src={EmailPic} alt="" /><h1 className='underline'>+998 91 480 80 07</h1></a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div onClick={() => { setIsOpen(!isOpen) }} className='flex justify-center items-center mb-2 cursor-pointer'>
                            </div>
                        </motion.div>

                    }

                </motion.div>

            </div>
            <div className='flex justify-center text-xs italic font-thin'>
                <h1>Built by Bekhruz Rakhmonov</h1>
            </div>
        </div>
    )
}

export default Bottom