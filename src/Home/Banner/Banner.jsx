import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (

        <div class="p-3 w-full">
            <div class="relative ">
                <div className='w-full bg-[#673AB7] border-color'></div>
                <div class="w-full bgc bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
                    <h1 className='h1'>Assignment Task</h1>
                    <hr className='mt-3 mb-2 bg-gray-500' />
                    <div className='flex gap-4'>
                        <p className='pl-1 text-gray-600 font-semibold'>example@emaple.com</p>
                        <a href='' className='text-blue-500 '>Switch Account</a>
                    </div>
                    <img src="" alt="" className='my-5'/>
                    <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
                    <hr className='mt-3 mb-2 bg-gray-500' />
                    <p className='text-red-600 text-lg '><span className='text-red-600 font-semibold text-lg'>* </span>Indicates required question</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;