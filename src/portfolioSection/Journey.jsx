import CompassPic3 from '../pics/compass3.png'
import Portfolio from './Portfolio'

const Journey = () => {
    return (
        <div id='journey' className="mt-15">
            <div className="flex justify-center font-bold text-3xl">
                <h1>EXPERIENCE TIMELINE</h1>
            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
                <div className='md:flex items-center'>

                    <div className='flex justify-center my-4'>
                        <div className="border-t-3 md:border-t-0 md:border-l-3 border-[#252526] rounded-lg p-2 md:p-1 md:pl-2 shadow-2xl">
                            <div className="h-15 w-15 bg-[#f5f5f5] rounded-xl flex items-center justify-center font-bold text-sm"><h2>Salsiccia</h2></div>
                            <div className="text-xs flex justify-center">
                                <h1>Gdansk</h1>
                            </div>
                            <div className="text-xs flex justify-center">
                                <h1>2021-2023</h1>
                            </div>
                        </div>
                    </div>

                    {/* ---- */}
                    <div className="hidden md:flex items-center mx-2">
                        <div className="h-1 w-30 bg-white"></div>
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white"></div>
                    </div>

                    {/* | */}
                    <div className="md:hidden flex flex-col items-center my-2">
                        <div className="w-1 h-10 bg-white"></div>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
                    </div>

                    <div className='flex justify-center'>

                    <div className="border-t-3 md:border-t-0 md:border-l-3 border-[#252526] rounded-lg p-2 md:p-1 md:pl-2 shadow-2xl">
                            <div className="h-15 w-15 bg-[#c9a063] rounded-xl flex items-center justify-center font-bold text-sm"><h2>Nita</h2></div>
                            <div className="text-xs flex justify-center">
                                <h1>Warsaw</h1>
                            </div>
                            <div className="text-xs flex justify-center">
                                <h1>2023-2025</h1>
                            </div>
                        </div>
                    </div>
                    {/* ---- */}
                    <div className="hidden md:flex items-center mx-2">
                        <div className="h-1 w-30 bg-white"></div>
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white"></div>
                    </div>

                    {/* | */}
                    <div className="md:hidden flex flex-col items-center my-2">
                        <div className="w-1 h-10 bg-white"></div>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
                    </div>

                    <div className='flex justify-center'>
                    <div className="border-t-3 md:border-t-0 md:border-l-3 border-[#252526] rounded-lg p-2 md:p-1 md:pl-2 shadow-2xl">
                            <div className="h-15 w-15 bg-[#31572c] rounded-xl flex items-center justify-center font-semibold text-sm"><h1>Toki</h1></div>
                            <div className="text-xs flex justify-center">
                                <h1>Jeddah</h1>
                            </div>
                            <div className="text-xs flex justify-center">
                                <h1>2025-2026</h1>
                            </div>
                        </div>
                    </div>
                    {/* ---- */}
                    <div className="hidden md:flex items-center mx-2">
                        <div className="h-1 w-30 bg-white"></div>
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white"></div>
                    </div>

                    {/* | */}
                    <div className="md:hidden flex flex-col items-center my-2">
                        <div className="w-1 h-10 bg-white"></div>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
                    </div>

                    <div className='flex justify-center'>
                    <div className="border-t-3 md:border-t-0 md:border-l-3 border-[#252526] rounded-lg p-2 md:p-1 md:pl-2 shadow-2xl">
                            <div className="h-15 w-15 bg-[#5e2028] rounded-xl flex items-center justify-center font-semibold text-sm">
                                <img className='invert brightness-0 p-1' src={CompassPic3} alt="" />
                            </div>
                            <div className="text-xs flex justify-center">
                                <h1>Tashkent</h1>
                            </div>
                            <div className="text-xs flex justify-center">
                                <h1>Current</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-10'>
                <Portfolio />
            </div>
        </div>
    )
}

export default Journey