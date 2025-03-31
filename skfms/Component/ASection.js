import React from 'react'
import Image from 'next/image'
import image1 from '@/Image/ASecImg.jpg'

const ASection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-medium text-7xl mb-2 text-gray-900">Our Follower </h1>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                        <p className="leading-relaxed">Customer</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                        <p className="leading-relaxed">Total Revenue</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                        <p className="leading-relaxed">Site</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                        <p className="leading-relaxed">Offices</p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <Image height={10000} width={10000} className="object-cover object-center w-full h-full" src={image1} alt="stats"/>
                </div>
            </div>
        </section>
    )
}

export default ASection
