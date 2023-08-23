import React from 'react';

const LinearScale = () => {
    return (
        <div className="p-3 w-full">
            <div className="relative">
                <div className="component-design bdc">
                    <p className="font-medium">Linear Scale <span className='text-red-600 font-semibold text-lg'>*</span></p>
                    <div class="flex items-center justify-between space-x-2">
                        <label for="worst">Worst</label>
                        <div>
                            <p>1</p>
                            <input type="radio" name="scale" value="1" class="transform scale-150" />
                        </div>
                        <div>
                            <p>2</p>
                            <input type="radio" id="poor" name="scale" value="2" class="transform scale-150" />
                        </div>
                        <div>
                            <p>3</p>
                            <input type="radio" id="average" name="scale" value="3" class="transform scale-150" />
                        </div>
                        <div>
                            <p>4</p>
                            <input type="radio" id="good" name="scale" value="4" class="transform scale-150" />
                        </div>
                        <div>
                            <p>5</p>
                            <input type="radio" id="best" name="scale" value="5" class="transform scale-150" />
                        </div>
                        <label for="worst">Best</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LinearScale;
