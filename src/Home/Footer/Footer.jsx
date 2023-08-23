import React from 'react';

const Footer = () => {
    return (
        <div className='ml-3'>
            <div className=' flex items-center justify-between'>
                <button className='btn btn-primary rounded-lg'>Submit</button>
                <progress className="ml-5 progress progress-success w-56" value="100" max="100"></progress>
                <button className='text-blue-500 mr-3'>Clear Form</button>
            </div>
            <div className='my-4'>
                <p className='text-gray-500 font-normal text-xs'>Never submit passwords through Google Forms.</p>
            </div>
            <div className='ml-10'>
                <p className='text-gray-500 font-normal text-xs'>This content is neither created nor endorsed by Google. <u href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/viewform">Report Abuse</u> - <u href='https://policies.google.com/terms' className=''>Terms of Service</u> - <u href='https://policies.google.com/privacy'>Privacy Policy</u></p>
            </div>
            <div className='text-center my-5'>
            <a href='https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms' className='text-gray-500 font-semibold text-2xl '>Google Forms</a>
            </div>
        </div>


    );
};

export default Footer;