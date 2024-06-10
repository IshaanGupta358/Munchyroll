import React from 'react'
import Card from '../small-components/Card'

function Recommendations({ animeData }) {
  return (
    <>
      <h2 className='dark:text-secondary text-primary mt-10 font-semibold'>Recommendations</h2>
      <div className="border-b-[2px] border-gray-600 mt-5 grid grid-cols-3 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[1fr] 2xl:grid-cols-8">
        {animeData && animeData.slice(0, 8).map((anime) => (
          <Card key={anime.id} data={anime} />
        ))}
      </div>
    </>
  )
}

export default Recommendations;