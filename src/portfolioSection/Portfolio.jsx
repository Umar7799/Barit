import BgVideo from '../pics/drinksvid.mp4'

const Portfolio = () => {
    return (
        /* Removed rounded-4xl here to prevent edge gaps during scroll */
        <div id='portfolio' className="relative h-screen w-full overflow-hidden bg-brand-bg">

            {/* 🎥 Background Video Container */}
            <div className="absolute inset-0 p-4 md:p-10"> {/* This creates the "Scale" look safely */}
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover blur-xs rounded-3xl"
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                
                {/* 🌑 Overlay - Matches the video size perfectly now */}
                <div className="absolute inset-4 md:inset-10 bg-black/50 rounded-3xl"></div>
            </div>

            {/* 📦 Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <div className='md:w-[60%] lg:w-[50%]'>
                    <h1 className="text-xl md:text-3xl font-bold mb-6 leading-tight">
                        From Warsaw to Riyadh, I've mastered the balance of classic precision and modern innovation.
                    </h1>
                </div>

                <div className="text-lg md:text-2xl opacity-90">
                    <h1 className="font-semibold text-brand-accent uppercase tracking-widest mb-2">What I bring:</h1>
                    <div className='space-y-1 font-light'>
                        <p>Signature Cocktails & Advanced Mixology</p>
                        <p>Luxury Non-Alcoholic Programs</p>
                        <p>Specialty Coffee & High-Volume Operations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio