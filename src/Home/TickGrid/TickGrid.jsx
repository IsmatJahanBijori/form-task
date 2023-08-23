import React from 'react';

const TickGrid = () => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="component-design bgc">
                    <p className="font-medium">Tick Grid <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <div class="grid grid-rows-3 gap-4">

                        <div class="flex items-center space-x-4">
                            <div className='flex gap-3'>
                                <p className='mt-5'>Row 1</p>

                                <div className='mb-3'>
                                    <p>Column 1</p>
                                    <input type="checkbox" id="radio1" name="row1" value="radio" />
                                </div>
                                <div>
                                    <p>Column 2</p>
                                    <input type="checkbox" id="checkbox1" name="row1" value="checkbox1" />
                                </div>
                                <div>
                                    <p>Column 3</p>
                                    <input type="checkbox" id="checkbox2" name="row1" value="checkbox2" />
                                </div>

                            </div>
                        </div>


                        <div class="flex items-center">
                            <p className='mr-2' >Row 2 </p>
                            <div className='flex  space-x-[70px]'>
                                <input type="checkbox" id="radio2" name="row2" value="radio" />
                                <input type="checkbox" id="checkbox3" name="row2" value="checkbox3" />
                                <input type="checkbox" id="checkbox4" name="row2" value="checkbox4" />

                            </div>
                        </div>


                        <div class="flex items-center">
                            <p className='mr-2' >Row 2 </p>
                            <div className='flex  space-x-[70px]'>
                                <input type="checkbox" id="radio2" name="row2" value="radio" />
                                <input type="checkbox" id="checkbox3" name="row2" value="checkbox3" />
                                <input type="checkbox" id="checkbox4" name="row2" value="checkbox4" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TickGrid;TickGrid