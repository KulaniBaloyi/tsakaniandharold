import React from 'react';

const Program = () => {
  // Common gradient class for consistency
  const gradientClass = "bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-yellow-600";

  const part1 = [
    ["Introduction and Welcome", "MC"],
    ["Opening Prayer", "Pastor"],
    ["Performance", ""],
    ["Exchanging of Rings and Pastor Blessing", "Pastor"],
    ["Performance", ""],
    ["Word by Uncles", "Bride & Groom's Uncles"],
    ["Word by Siblings", "Bride & Groom's Siblings"],
    ["Word by Friends", "Bride & Groom's Friends"],
    ["Word by Colleagues", "Colleagues"],
    ["Toast and Cutting of Cake", ""],
    ["Lunch Time", ""],
  ];

  const part2 = [
    ["Sibling and Friend Tributes", "Siblings & Friends"],
    ["Children and Grandchildren Tributes", "Children & Grandchildren"],
    ["Toast and Cutting of Cake", ""],
    ["Closing Prayer", ""],
    ["Departure to Mackay's Residence", ""],
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 font-sans">
      {/* Title Section */}
      <div className="text-center mb-20">
        <h3 className={`text-6xl font-extralight tracking-tight mb-4 ${gradientClass}`}>
          The Program
        </h3>
        <div className="h-[2px] w-24 bg-gradient-to-r from-emerald-400 to-yellow-600 mx-auto rounded-full opacity-50" />
      </div>

      {/* Part 1 */}
      <div className="mb-24">
        <div className="flex items-center mb-10">
            <span className={`font-bold tracking-[0.3em] text-sm uppercase ${gradientClass}`}>
                Part One
            </span>
            <div className="flex-grow h-[1px] bg-emerald-100/50 ml-6"></div>
        </div>
        
        <div className="space-y-2">
          {part1.map(([label, speaker], i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-sm ${
                i % 2 === 0 ? 'bg-emerald-50/30' : 'bg-transparent'
              }`}
            >
              <p className="text-xl font-light text-slate-700 md:flex-[0.6]">
                {label}
              </p>
              <p className={`text-xs font-bold uppercase tracking-widest mt-2 md:mt-0 md:flex-[0.4] md:text-right ${gradientClass}`}>
                {speaker}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2 */}
      <div>
        <div className="flex items-center mb-10">
            <span className={`font-bold tracking-[0.3em] text-sm uppercase ${gradientClass}`}>
                Part Two
            </span>
            <div className="flex-grow h-[1px] bg-emerald-100/50 ml-6"></div>
        </div>

        <div className="space-y-2">
          {part2.map(([label, speaker], i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-sm ${
                i % 2 === 0 ? 'bg-emerald-50/30' : 'bg-transparent'
              }`}
            >
              <p className="text-xl font-light text-slate-700 md:flex-[0.6]">
                {label}
              </p>
              <p className={`text-xs font-bold uppercase tracking-widest mt-2 md:mt-0 md:flex-[0.4] md:text-right ${gradientClass}`}>
                {speaker}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-24 text-center">
        <p className="text-slate-400 font-light tracking-wide italic">
          Handcrafted for Tsakani & Harold
        </p>
      </div>
    </section>
  );
};

export default Program;