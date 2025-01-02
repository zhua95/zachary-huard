import React from 'react'
import checkMarkIcon from '../assets/checkmark-dark.svg'

function SkillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="Checkmark-Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList
