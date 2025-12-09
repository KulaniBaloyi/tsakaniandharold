import React from 'react';

// NOTE: Assumes you have configured the 'font-display' (for Serif names) 
// and 'font-sans' (for general text) in your tailwind.config.js.

const Landing = () => {
  // --- Engagement Details (Hardcoded) ---
  const coupleName = "Tsakani & Harold";
  const announcementDate = "October 26, 2025";
  const daysLeftStatic = "321";
  const tagline = "Our Journey Begins.";

  return (
    // Outer Container: Min height, uses smaller padding on mobile (p-4)
    <section className='min-h-screen w-full bg-white font-sans text-gray-800 p-4 md:p-12'>
      
      {/* Navigation (Top Center) */}
      <header className='w-full flex justify-center mt-4 mb-10 md:mt-0 md:mb-24'>
          <nav className='flex space-x-4 sm:space-x-8 text-xs sm:text-sm uppercase tracking-widest font-medium'>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Home</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Gallery</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>Registry</a>
              <a href="#" className='hover:text-gray-500 transition duration-150'>RSVP</a>
          </nav>
      </header>

      {/* Main Content Area (Centered) */}
      <div className='max-w-xl mx-auto text-center relative'> {/* max-w-xl limits max size, scales down naturally */}
        
        {/* Decorative Floral Accents Placeholder */}
        {/* These elements are hidden on small screens for better performance and reduced clutter */}
        <div className='absolute inset-0 pointer-events-none hidden md:block'>
            {/* Top Left Accent */}
            <div className='absolute top-[-50px] left-[-50px] text-gray-300 text-6xl opacity-50'>🌿</div>
            {/* Bottom Right Accent */}
            <div className='absolute bottom-[-100px] right-[-100px] text-gray-300 text-6xl opacity-50'>🌸</div>
        </div>

        {/* --- Central Text Block --- */}
        
        {/* Announcement Date */}
        <p className='text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6'>
          {announcementDate}
        </p>

        {/* Main Names/Heading */}
        <h1 className='
            // Font size scales down significantly on mobile
            text-5xl sm:text-7xl md:text-8xl lg:text-9xl 
            font-display font-light leading-snug // Changed to leading-snug for better mobile stacking
            text-[#B05E5E] 
            relative z-10
          '
        >
          {coupleName}
        </h1>
        
        {/* Tagline / Sub-Heading */}
        <h2 className='mt-4 text-lg sm:text-xl font-light italic text-gray-600'>
          {tagline}
        </h2>
        
        {/* Countdown / Detail */}
        <div className='mt-8 mb-10 text-xs uppercase tracking-widest text-gray-500'>
            <span className='font-bold text-base text-gray-800 mr-2'>{daysLeftStatic}</span> Days Until I Do
        </div>

        {/* Call to Action Button (RSVP/Reservation Style) */}
        <button 
            className='
                px-8 py-3 
                border border-gray-400 text-gray-800 
                rounded-full 
                uppercase tracking-wider font-medium text-sm
                hover:bg-gray-50 transition duration-300
            '
        >
            Make Reservation
        </button>

      </div>
      
      {/* ---------------------------------------------------- */}
      {/* Footer Image Gallery Placeholder */}
      {/* ---------------------------------------------------- */}
      <div className='mt-16 md:mt-32 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Example Image Placeholder 1 */}
            <div className='bg-gray-200 h-48 md:h-64 flex items-center justify-center'>
                <p className='text-gray-500 text-sm'>Photo 1</p>
            </div>
            {/* Example Image Placeholder 2 */}
            {/* On mobile (default), this takes 1 column. On md screens, it spans 2 columns. */}
            <div className='bg-gray-200 h-48 md:h-64 flex items-center justify-center md:col-span-2'>
                 <p className='text-gray-500 text-sm'>Photo 2 (Wide)</p>
            </div>
        </div>
      </div>

    </section>
  );
}

export default Landing;