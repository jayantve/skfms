import React from 'react'
import Image from 'next/image'
import image6 from '@/Image/HK6.jpg'
import image5 from '@/Image/HK5.jpg'
import image4 from '@/Image/HK4.jpg'
import image3 from '@/Image/HK3.jpg'
import image2 from '@/Image/HK2.jpg'
import image1 from '@/Image/HK1.jpg'

const HKSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image1} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">General Cleaning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image2} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Deep Cleaning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image3} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Window Glass Cleaning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center h-full w-full" src={image4} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Carpet Cleaning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center h-full w-full" src={image5} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Sofa Shampoo</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center h-full w-full" src={image6} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Curtains Cleaning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HKSection
