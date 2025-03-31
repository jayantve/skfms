import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    const image = {
        a : './post1.jpg'
    }
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Image Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <Image height={100} width={100} src={image.a} alt="Image 1" className="w-full h-auto object-cover aspect-square"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery
