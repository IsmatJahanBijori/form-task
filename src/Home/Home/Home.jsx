import React from 'react';
import Banner from '../Banner/Banner';
import MCQ from '../MCQ/MCQ';
import CheckBox from '../CheckBox/CheckBox';
import ShortAnswer from '../ShortAnswer/ShortAnswer';
import ParaGraph from '../ParaGraph/ParaGraph';
import DropDown from '../DropDown/DropDown';
import FileUpload from '../FileUpload/FileUpload';
import LinearScale from '../LinearScale/LinearScale';
import MultiGrid from '../MultiGrid/MultiGrid';
import TickGrid from '../TickGrid/TickGrid';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className='bg-[#f0ebf8] w-full min-h-screen'>
            <div className="container px-5 py-2 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <Banner />
                    <MCQ />
                    <CheckBox/>
                    <ShortAnswer/>
                    <ParaGraph/>
                    <DropDown/>
                    <FileUpload/>
                    <LinearScale/>
                    <MultiGrid/>
                    <TickGrid/>
                    <Footer/>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;