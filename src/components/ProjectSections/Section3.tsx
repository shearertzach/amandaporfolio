import { Project } from '@/lib/types/Project'
import React from 'react'

const Section3 = ({ project }: { project: Project }) => {
    return (
        <>
            <h4 className='text-2xl  mb-4'>User Persona</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                {project.userPersona.images.map((image, index) => (
                    // <Image
                    //     key={index}
                    //     src={image}
                    //     alt={`User Persona Image ${index + 1}`}
                    //     width={500}
                    //     height={500}
                    //     className='rounded-lg'
                    // />
                    <div key={index} className='w-full aspect-[1.5/1] bg-gray-300' />
                ))}
            </div>
        </>
    )
}

export default Section3