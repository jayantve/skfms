import React from 'react'
import Image from 'next/image'
import image1 from '@/Image/PL1.jpg'
import image2 from '@/Image/PL2.jpg'
import image3 from '@/Image/PL3.jpg'
import image4 from '@/Image/PL4.jpg'
import image5 from '@/Image/PL5.jpg'
import image6 from '@/Image/PL6.jpg'
import image7 from '@/Image/PL7.jpg'
import image8 from '@/Image/PL8.jpg'
const PLSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image1} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Residential Plumbing Services </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image2} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Installation and Upgrades </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image3} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Hot Water Installation & Repairs </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image4} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Clogged </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image5} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Gas Pipe Repairs </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image6} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Blocked Drains </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image7} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Renovations </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                 <Image alt="content" className="object-cover object-center h-full w-full" src={image8} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"> Refurbishment </h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PLSection
