import React from 'react';

const Footer = () => {
    return (
        <div className='ml-3 flex items-center justify-between'>
            <button className='btn btn-primary rounded-lg'>Submit</button>
            <progress className="ml-5 progress progress-success w-56" value="100" max="100"></progress>
            <button className='text-blue-500 mr-3'>Clear Form</button>

        </div>


    );
};

export default Footer;