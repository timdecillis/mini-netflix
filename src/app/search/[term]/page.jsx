import React from 'react'
import Movies from '../../../components/Movies'

const Results = ({params}) => {
  const {term} = params;
  return (
    <Movies term={term}/>
  )
}

export default Results