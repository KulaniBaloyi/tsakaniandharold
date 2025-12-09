import React from 'react';

const Landing = () => {
  // --- Engagement Details (Hardcoded) ---
  const coupleName = "Tsakani & Harold";
  const announcementDate = "October 26, 2025";
  const daysLeftStatic = "321";
  const tagline = "Our Journey Begins.";

  return (
    // Outer Container: The main wrapper for all elements
    <section className='h-screen w-full flex flex-col md:flex-row font-sans relative'>
      {/* The 'relative' class here is crucial! It establishes the positioning 
        context for the absolute-positioned RSVP button.
      */}

      {/* ---------------------------------------------------- */}
      {/* LEFT HALF (Design Block) - z-10 added to ensure it's below the button's z-50 */}
      {/* ---------------------------------------------------- */}
      <div 
        className='
          w-full md:w-1/2 h-3/5 md:h-full 
          bg-[#707567] relative z-10
          p-6 sm:p-10 flex flex-col justify-end text-white
        '
      >
        
        {/* Navigation Header (Top Left) - Remains z-10 but is positioned relative to this block */}
        <div className='absolute top-6 left-6 sm:top-10 sm:left-10 flex space-x-4 sm:space-x-8 text-xs uppercase tracking-widest font-light'>
            <a href="#" className='hover:text-gray-300'>Home</a>
            <a href="#" className='hover:text-gray-300'>Gallery</a>
            <a href="#" className='hover:text-gray-300'>Registry</a>
        </div>
        
        {/* Content */}
        <div className="mb-4">
            <p className='text-sm uppercase tracking-wider mb-2 font-light opacity-80'>
              05.15.20
            </p>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-serif leading-tight'>
              {coupleName}
            </h1>
           
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* RIGHT HALF (Image Placeholder) - z-0 or z-10 */}
      {/* ---------------------------------------------------- */}
      <div 
        className='
          w-full md:w-1/2 h-2/5 md:h-full 
          bg-gray-400 relative z-0 flex items-center justify-center 
          overflow-hidden
        '
      >
        <span className='text-gray-700 text-lg'>[Image Placeholder]</span>
      </div>
      
      {/* ---------------------------------------------------- */}
      {/* THE ROTATED RSVP BUTTON (Moved to the main section) */}
      {/* ---------------------------------------------------- */}
      <div 
        className='
          absolute z-50 // <-- CRUCIAL: High Z-index
          
          // Mobile Position: Center of the dividing line between the two blocks
          top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2

          // Desktop Position: Center of the screen dividing line
          md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
          
          // Styling
          w-24 h-24 rounded-full border border-gray-900 flex items-center justify-center 
          cursor-pointer bg-white shadow-lg bg-opacity-90 hover:bg-opacity-100 transition duration-300
        '
      >
        <span className='text-gray-900 text-sm font-semibold uppercase tracking-widest -rotate-45'>
          RSVP
        </span>
      </div>

    </section>
  );
}

export default Landing;