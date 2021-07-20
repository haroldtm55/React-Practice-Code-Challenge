import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, indexes, handleIndexes, handleSushiAndBudget, sushisEaten}) => {

  
  return (
    <Fragment>
      <div className="belt">
        {
         sushis.slice(indexes.initialIndex,indexes.finalIndex).map((sushi,mappedIndex) => (
          <Sushi 
            key={mappedIndex} 
            sushiIndex={mappedIndex+indexes.initialIndex} 
            sushi={sushi} 
            handleSushiAndBudget={handleSushiAndBudget} 
            sushiEaten={sushisEaten[mappedIndex+indexes.initialIndex]}/>))
        }
        <MoreButton handleIndexes={handleIndexes}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer