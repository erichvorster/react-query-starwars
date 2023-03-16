import React from 'react'

const Planet = ({planet}) => {
  return (
    <div className='px-12 py-6 m-4 bg-neutral-800 rounded-xl border-yellow-300'>
        <h3 className='text-yellow-400 text-2xl font-bold'>{planet.name}</h3>
        <p className='text-gray-300'>Population - {planet.population}</p>
        <p className='text-gray-300' >Terrain - {planet.terrain}</p>
    </div>
  )
}

export default Planet