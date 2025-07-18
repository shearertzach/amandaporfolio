import { Project } from '@/lib/types/Project'
import React from 'react'

const Section6 = ({ project }: { project: Project }) => {
  return (
    <div>
        <h4 className='text-2xl  mb-4'>Prototype</h4>
        <div className='w-full aspect-[2/1] bg-gray-300' />
    </div>
  )
}

export default Section6