import React from 'react';

const FileUpload = () => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="component-design bfc">
                    <p className="font-medium">File Upload <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <form className="flex items-center space-x-6 my-5">
                    <label className=" flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <g transform="translate(-3, -3)">
                        <path d="M6,14.25 L7.5,14.25 L7.5,16.5 L16.5,16.5 L16.5,14.25 L18,14.25 L18,16.5 C18,17.325 17.325,18 16.5,18 L7.5,18 C6.675,18 6,17.325 6,16.5 L6,14.25 Z M9.3075,10.8075 L11.25,8.8725 L11.25,15 L12.75,15 L12.75,8.8725 L14.6925,10.815 L15.75,9.75 L12,6 L8.25,9.75 L9.3075,10.8075 Z"></path>
                      </g>
                    </svg>
                    <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" onchange="updateFileName(this)" />
                  </label>
                  <span id="file-name" className="text-slate-500 text-sm"></span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
