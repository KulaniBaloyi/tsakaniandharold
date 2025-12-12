import React from 'react';

const Program = () => {
  return (
    <>
      <h3 className="text-center text-3xl font-display font-medium text-gray-800 mb-10">
        Program
      </h3>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-5 mb-20 max-w-5xl mx-auto p-4 rounded-xl">
        {/* Part 1 */}
        <div className="col-span-2 border border-gray-300 grid place-items-center rounded-t-lg">
          <p>Part 1</p>
        </div>
        <div className="col-span-3 flex flex-col space-y-1">
          {[
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
          ].map(([label, speaker], i) => (
            <div key={i} className="border border-gray-300 h-16 flex items-center">
              <p className="flex-[0.7] h-full grid place-content-center border-r border-gray-300">
                {label}
              </p>
              <p className="flex-[0.3] h-full grid place-content-center text-center">
                {speaker}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2 */}
        <div className="col-span-2 border mt-5 border-gray-300 grid place-items-center rounded-t-lg">
          <p>Part 2</p>
        </div>
        <div className="col-span-3 flex flex-col space-y-1">
          {[
            ["Sibling and Friend Tributes", "Siblings & Friends"],
            ["Children and Grandchildren Tributes", "Children & Grandchildren"],
            ["Toast and Cutting of Cake", ""],
            ["Closing Prayer", ""],
            ["Departure to Mackay's Residence", ""],
          ].map(([label, speaker], i) => (
            <div key={i} className="border border-gray-300 h-16 flex items-center">
              <p className="flex-[0.7] h-full grid place-content-center border-r border-gray-300">
                {label}
              </p>
              <p className="flex-[0.3] h-full grid place-content-center text-center">
                {speaker}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Program;