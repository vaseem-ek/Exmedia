import React from 'react'
import Dash from './Dash'

function Deliverables() {
    return (
        <div>
            <div>
                <Dash />
                <div className='my-5 lg:m-20 lg:px-20 md:m-10'>
                    <div className='grid md:grid-cols-[1fr_3fr]   grid-cols-1    '>
                        <div className='px-5 flex-col flex  '>
                            <h1 className='text-xl lg:text-3xl font-extrabold'>Our Deliverables</h1>
                            <p className='text-gray-500 text-justify'>Best solutions & ideas for Your business. Elevate your impacts & connect brands with customers.</p>
                        </div>
                        <div className='  '>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-01.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-02.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-03.svg" alt="" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-04.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-05.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-06.svg" alt="" />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-07.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-08.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-09.svg" alt="" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
                                <div className=" ">
                                    <img
                                        src="https://exmedia.in/images/EX%20ICON-10.svg"
                                       
                                    />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-11.svg" alt="" />
                                </div>
                                <div className='px-5'>
                                    <img src="https://exmedia.in/images/EX%20ICON-12.svg" alt="" />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deliverables
