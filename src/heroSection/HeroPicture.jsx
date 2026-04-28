import HeroPic from '../pics/real.png'
import HeroPic2 from '../pics/hyhyh.png'
import { useState, useEffect } from 'react';

const HeroPicture = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const cardFront = HeroPic;
    const cardBack = HeroPic2;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setIsFlipped((prev) => !prev);
        }, 2500); // 1.5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div>
            <div className="flex items-center justify-center">
                <div
                    className="group h-70 w-54 perspective-[1000px]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className={`relative h-full w-full rounded-2xl shadow-xl transition-all duration-1000 transform-3d ${isFlipped ? 'transform-[rotateY(180deg)]' : ''
                            }`}
                    >
                        {/* Front Face */}
                        <div className="absolute inset-0 h-full w-full backface-hidden">
                            <img
                                src={cardFront}
                                alt="Front"
                                className="h-full w-full rounded-2xl object-cover border-4 border-[#252526] shadow-lg"
                            />
                        </div>

                        {/* Back Face */}
                        <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden transform-[rotateY(180deg)]">
                            <img
                                src={cardBack}
                                alt="Back"
                                className="h-full w-full rounded-2xl object-cover border-4 border-[#252526] shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPicture