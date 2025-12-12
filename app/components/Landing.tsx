import Image from "next/image";

// --- CONFIGURATION FOR MODERN LOOK ---
// Define a subtle, modern gradient for the background
const BACKGROUND_GRADIENT = "bg-gradient-to-br from-white via-stone-50 to-rose-50";

// Define the gradient for the main header text (Mauve/Rose to Peach)
const HEADER_TEXT_GRADIENT = "bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-yellow-600";

// Define the gradient for the call-to-action button (Deep Indigo/Slate to Blue)
const BUTTON_GRADIENT = "bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800";
// ------------------------------------

const Landing = () => {
    // --- Engagement Details (Hardcoded) ---
    const coupleName = "Tsakani & Harold";
    const announcementDate = "December 12, 2025";
    const daysLeftStatic = "1";
    const tagline = "Our Journey Begins.";

    // Array of 4 abstract image placeholders with varying height classes
    const images = [
        { heightClass: "h-96", alt: "Photo 1 (Tall Portrait)",src:"/img1.jpg" },
        { heightClass: "h-96", alt: "Photo 1 (Tall Portrait)",src:"/img5.jpg" },
        { heightClass: "h-56", alt: "Photo 2 (Landscape)",src:"/img3.jpg" },
        { heightClass: "h-72", alt: "Photo 3 (Square-ish)",src:"/img4.jpg" },
        { heightClass: "h-40", alt: "Photo 4 (Short Landscape)",src:"/img5.jpg" },
    ];

    return (
        // Applied subtle gradient background and deep text color
        <section className={`min-h-screen w-full font-sans bg-linear-to-br from-white via-stone-50 to-rose-50 text-slate-800 p-4 md:p-12 ${BACKGROUND_GRADIENT}`}>
            
            <div className='max-w-xl mx-auto text-center relative pt-8 md:pt-16'>
                
                {/* Cleaned up decorative accents (using more modern emojis/icons) */}
                <div className='absolute inset-0 pointer-events-none hidden md:block'>
                    <div className='absolute top-[-50px] left-[-50px] text-pink-300 text-7xl opacity-30 transform rotate-[-15deg]'>✨</div>
                    <div className='absolute bottom-[-100px] right-[-100px] text-rose-400 text-7xl opacity-30 transform rotate-[15deg]'>💍</div>
                </div>

                {/* Central Text Block */}
                <p className='text-sm uppercase tracking-[0.3em] text-slate-500 mb-4 md:mb-6'>
                    {announcementDate}
                </p>
                {/* Main Heading with Gradient Text applied */}
                <h1 className={`
                    text-6xl sm:text-8xl md:text-9xl 
                    font-extralight 
                    leading-tight 
                    relative z-10 
                    ${HEADER_TEXT_GRADIENT}
                `}>
                    {coupleName}
                </h1>
                <h2 className='mt-6 text-xl sm:text-2xl font-light italic text-slate-600'>
                    {tagline}
                </h2>
                
                <div className='mt-10 mb-12 text-sm uppercase tracking-[0.3em] text-slate-500'>
                    <span className='font-semibold text-lg text-slate-800 mr-2'>{daysLeftStatic}</span> Days Until I Do
                </div>

                {/* Updated Button with Solid Gradient Background */}
                <button className={`
                    px-10 py-4 
                    text-white 
                    rounded-full 
                    uppercase tracking-wider font-semibold text-sm 
                    shadow-lg hover:shadow-xl transition duration-300 
                    transform hover:scale-[1.02]
                    ${BUTTON_GRADIENT}
                `}>
                    View Program
                </button>
            </div>
            
            {/* ---------------------------------------------------- */}
            {/* RESPONSIVE MASONRY COLUMN LAYOUT GALLERY */}
            {/* ---------------------------------------------------- */}
            <div className='mt-20 md:mt-36 max-w-6xl mx-auto'>
                
                <h3 className='text-center text-4xl font-light text-slate-800 mb-12 border-b-2 border-rose-200 inline-block px-4 pb-2'>
                    Gallery
                </h3>

                {/* Masonry Container */}
                <div 
                    className='
                        columns-1 sm:columns-2 lg:columns-3 
                        space-y-4 md:space-y-6 
                    '
                >
                    {images.map((image, index) => (
                        // Updated Item Style: High-contrast placeholder with subtle shadow
                        <div 
                            key={index} 
                            className={`
                                break-inside-avoid 
                                w-full ${image.heightClass}
                                rounded-xl // Slightly more modern rounding
                                shadow-md // Subtle shadow
                                bg-slate-100 // Lighter background for images
                                flex items-center justify-center 
                                transition-all duration-300 
                                hover:shadow-2xl hover:bg-slate-200
                                mb-4 md:mb-6 relative
                            `}
                        >
                           <Image fill src={image.src} alt={image.alt} className="object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Landing;