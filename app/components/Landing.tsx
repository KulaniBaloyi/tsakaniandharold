import React from 'react';

const Landing = () => {
  // --- Engagement Details (Hardcoded) ---
  const coupleName = "Tsakani & Harold";
  const announcementDate = "October 26, 2025";
  const daysLeftStatic = "321";
  const tagline = "Our Journey Begins.";
  
  // Array of 4 abstract image placeholders with varying height classes
  const images = [
      { heightClass: "h-96", alt: "Photo 1 (Tall Portrait)" }, // Tall
      { heightClass: "h-56", alt: "Photo 2 (Landscape)" },    // Medium/Wide
      { heightClass: "h-72", alt: "Photo 3 (Square-ish)" },   // Medium
      { heightClass: "h-40", alt: "Photo 4 (Short Landscape)" }, // Short
  ];

  return (
    <section className='min-h-screen w-full bg-white font-sans text-gray-800 p-4 md:p-12'>
      
      {/* --- Navigation --- */}
      <header className='w-full flex justify-center mt-4 mb-10 md:mt-0 md:mb-24'>
          <nav className='flex space-x-4 sm:space-x-8 text-xs sm:text-sm uppercase tracking-widest font-medium'>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Home</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Gallery</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Registry</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>RSVP</a>
          </nav>
      </header>

      {/* --- Main Content --- */}
      <div className='max-w-xl mx-auto text-center relative'> 
        
        {/* Decorative Floral Accents Placeholder (Hidden on mobile) */}
        <div className='absolute inset-0 pointer-events-none hidden md:block'>
            <div className='absolute top-[-50px] left-[-50px] text-gray-300 text-6xl opacity-50'>🌿</div>
            <div className='absolute bottom-[-100px] right-[-100px] text-gray-300 text-6xl opacity-50'>🌸</div>
        </div>

        {/* Central Text Block */}
        <p className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6'>
          {announcementDate}
        </p>
        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light leading-snug text-[#B05E5E] relative z-10'>
          {coupleName}
        </h1>
        <h2 className='mt-4 text-lg sm:text-xl font-light italic text-gray-600'>
          {tagline}
        </h2>
        
        <div className='mt-8 mb-10 text-xs uppercase tracking-widest text-gray-500'>
            <span className='font-bold text-base text-gray-800 mr-2'>{daysLeftStatic}</span> Days Until I Do
        </div>

        <button className='px-8 py-3 border border-gray-400 text-gray-800 rounded-full uppercase tracking-wider font-medium text-sm hover:bg-gray-50 transition duration-300'>
            Make Reservation
        </button>
      </div>
      
      {/* ---------------------------------------------------- */}
      {/* RESPONSIVE MASONRY COLUMN LAYOUT GALLERY */}
      {/* ---------------------------------------------------- */}
      <div className='mt-16 md:mt-32 max-w-6xl mx-auto'>
        
        <h3 className='text-center text-3xl font-display font-medium text-gray-800 mb-10'>
            Our Gallery
        </h3>

        {/* Masonry Container: Columns change based on screen size */}
        <div 
            className='
                columns-1 sm:columns-2 lg:columns-3 
                space-y-4 md:space-y-6 
            '
        >
            {images.map((image, index) => (
                // Each Item: div with border, height placeholder, and text
                <div 
                    key={index} 
                    className={`
                        break-inside-avoid 
                        w-full ${image.heightClass} // Uses specific height class for visual variety
                        rounded-lg 
                        border border-gray-300 bg-gray-50 
                        flex items-center justify-center 
                        transition-all duration-300 hover:shadow-xl 
                        mb-4 md:mb-6 
                    `}
                >
                    <p className='text-gray-500 text-sm'>
                        {image.alt}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Landing;