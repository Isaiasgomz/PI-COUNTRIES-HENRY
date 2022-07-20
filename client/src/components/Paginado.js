import React from 'react'

function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []
    for (let index = 0; index <= Math.ceil(allCountries/countriesPerPage); index++) {
        pageNumbers.push(index+1)
    }

  return (
    <nav>
        <ul className='paginado'>
           
                {
                    pageNumbers && pageNumbers.map(number =>(
                    <li className='number' key={number}>
                        <a  onClick={() => paginado(number) }>{number}</a>
                    </li>
                    ))
                }
            
        </ul> 
    </nav>
  )
}

export default Paginado