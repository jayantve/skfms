import React from 'react'
import Image from 'next/image'
import image1 from '@/Image/Elec1.jpg'
import image2 from '@/Image/Elec2.jpg'
import image3 from '@/Image/Elec3.jpg'
import image4 from '@/Image/Elec4.jpg'
import image5 from '@/Image/Elec5.jpg'
import image6 from '@/Image/Elec6.jpg'
import image7 from '@/Image/Elec7.jpg'
import image8 from '@/Image/Elec8.jpg'

const ElecSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center h-full w-full" src={image1} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Re-wires</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center h-full w-full" src={image2} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">New Builds</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image3} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">RCD & Consumer unit upgrades</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image4} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">TV Aerial & Extra Paints</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image5} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Date/Phone/Networking</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image6} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Security & Garden Lightning</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image7} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">LED & Low Energy Lighning Installs</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="object-cover object-center h-full w-full" src={image8} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Extra Internal/External Sockets</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ElecSection
