import React from 'react'

const DisplayAllList = ({boxArray}) => {
  return (
    <div className="container">
        <h2 className="text-light mt-5">All Boxes:</h2>
        <div className="row bg-light rounded p-1">
            {/* use .map on our boxArray (passed in as props) to display all boxes in state! */}

            {
                // oneBoxObj on our App.js represents oneBoxColor parameter adjusting style attributes, you need a fstring string interpolation to combine the number w/px
                boxArray.map((oneBoxColor, index) => (
                    <div className="boxArray row" key={index} style={{
                        backgroundColor: oneBoxColor.boxColor, 
                        height: `${oneBoxColor.boxHeight}px`, 
                        width: `${oneBoxColor.boxWidth}px`,
                        margin: `${5}px`}}>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DisplayAllList