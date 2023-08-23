import React, { useState } from 'react';
// import "./MCQ.css"
// import CheckBox from '../../components/checkbox';
const MCQ = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="component-design bnc">
                    <p className="font-medium">MCQ <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <div className="form-control mt-5">
                        <label className="cursor-pointer my-2">
                            <input
                                type="radio"
                                name="mcqOption"
                                value="Option 1"
                                checked={selectedOption === "Option 1"}
                                onChange={() => handleOptionChange("Option 1")}
                                className={`cursor-pointer my-2 rounded-full ${selectedOption === "Option 1"
                                        ? "text-purple-500"
                                        : "text-white"
                                    }`}
                            />
                            <span className="ml-8 text-lg font-normal">Option 1</span>
                        </label>
                        <label className="cursor-pointer my-2">
                            <input
                                type="radio"
                                name="mcqOption"
                                value="Option 2"
                                checked={selectedOption === "Option 2"}
                                onChange={() => handleOptionChange("Option 2")}
                                className={`cursor-pointer my-2 rounded-full ${selectedOption === "Option 2"
                                        ? "text-purple-500"
                                        : "text-white"
                                    }`}
                            />
                            <span className="ml-8 font-normal text-lg">Option 2</span>
                        </label>
                        <label className="cursor-pointer my-2">
                            <input
                                type="radio"
                                name="mcqOption"
                                value="Option 3"
                                checked={selectedOption === "Option 3"}
                                onChange={() => handleOptionChange("Option 3")}
                                className={`cursor-pointer my-2 rounded-full ${selectedOption === "Option 3"
                                        ? "text-purple-500"
                                        : "text-white"
                                    }`}
                            />
                            <span className="ml-8 font-normal text-lg">Option 3</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MCQ;
