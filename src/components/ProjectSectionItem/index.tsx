import Image from 'next/image';
import React from 'react'

type ProjectSectionItemProps = {
  icon: string;
  title: string;
  description: string;
}

const ProjectSectionItem = ({ icon, title, description }: ProjectSectionItemProps) => {
  return (
    <div>
      <Image
        src={icon}
        alt={`${title} icon`}
        width={35}
        height={35}
        className="mb-2"
      />
      <h5 className="text-xl  mb-2">{title}</h5>
      <p className="font-quicksand font-light">{description}</p>
    </div>
  )
}

export default ProjectSectionItem