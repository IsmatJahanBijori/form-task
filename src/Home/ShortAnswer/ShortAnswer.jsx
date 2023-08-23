import React from 'react';

const ShortAnswer = () => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="w-full bfc bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
                    <p className="font-medium">Short Answer <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3 max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default ShortAnswer;
//<TextField id="standard-basic" label="Standard" variant="standard" />