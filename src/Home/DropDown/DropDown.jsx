import React from 'react';

const DropDown = () => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="w-full bdc bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ">
                    <p className="font-medium">DropDown <span className='text-red-600 font-semibold text-lg'>*</span></p>

                    <label htmlFor="options" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Select an option</label>
                    <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 mb-5">
                        <option className='rounded-lg' selected>Choose</option>
                        <option className='rounded-lg' value="option1">Option 1</option>
                        <option className='rounded-lg' value="option2">Option 2</option>
                        <option className='rounded-lg' value="option3">Option 3</option>
                    </select>

                </div>
            </div>
        </div>
    );
};

export default DropDown;
DropDown