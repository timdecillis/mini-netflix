import React from 'react'

interface MovieProps {
  params: {
    id: string
  }
}

const Movie = ({params}: MovieProps) => {
  console.log('PARAMS:', params.id)

  return (
    <div>Movie</div>
  )
}

export default Movie