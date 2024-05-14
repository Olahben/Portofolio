import React from 'react'
import SkillIcons from './SkillIcons'

const Skills = () => {
  return (
    <div className='sm:max-w-[608px] sm:w-[608px] flex justify-center text-center flex-wrap flex-col'>
      <p className="text-3xl font-medium mb-8">My Skills</p>
      <ul className="flex flex-wrap justify-center gap-0.5 gap-y-3">
        <SkillIcons />
      </ul>
    </div>
  )
}

export default Skills