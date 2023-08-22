import React from 'react';
import Banner from '../Banner/Banner';
import MCQ from '../MCQ/MCQ';
import CheckBox from '../CheckBox/CheckBox';


const Home = () => {
    return (
        <div className='bg-[#f0ebf8] w-full min-h-screen'>
            <div className="container px-5 py-2 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <Banner />
                    <MCQ />
                    <CheckBox/>
                </div>
            </div>
        </div>
    );
};

export default Home;