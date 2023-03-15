import React from 'react'

const Person = ({person}) => {
  return (
    <div>
        <h3>{person.name}</h3>
        <p>Population - {person.population}</p>
        <p>Terrain - {person.terrain}</p>
    </div>
  )
}

export default Person