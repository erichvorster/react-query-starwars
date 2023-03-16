import React from 'react'

const Person = ({person}) => {
  return (
    <div className='px-12 py-6 m-4 bg-neutral-800 rounded-xl border-yellow-300'>
        <h3 className='text-yellow-400 text-2xl font-bold'>{person.name}</h3>
        <p className='text-gray-300'>Mass - {person.mass}</p>
        <p className='text-gray-300'>Height - {person.height}</p>
    </div>
  )
}

export default Person