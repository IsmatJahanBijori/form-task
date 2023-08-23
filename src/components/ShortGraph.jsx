import React from 'react';

const ShortGraph = ({title}) => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="component-design bfc">
                    <p className="font-medium">{title} <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <input type="text" placeholder="Your Answer" className="input input-bordered border-t-0 border-r-0 border-l-0 w-full mt-3" />
                </div>
            </div>
        </div>
    );
};

export default ShortGraph;