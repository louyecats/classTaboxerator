import React from 'react'

// bring in props by destructuring in the component parameters
const Form1 = ({allBoxObj, setAllBoxObj, boxArray, setBoxArray, addBox, changeHandler}) => {
//other way to bring in props 
//const Form1 = (props) => {
  //const {allBoxObj, setAllBoxObj, boxArray, setBoxArray, addBox} = props

  return (
    <div className="bg-dark p-3 rounded">
      {/* onSubmit we call on the addBox function that puts each new box in state */}
      <form className="form-inline" onSubmit = {addBox}>
            <label className="p-1 text-light">Tab Color:
              {/* allBoxObj is the getter for the function holding box style attributes */}
              {/* we need to keep track of form changes made w/changeHandler function */}
              <input type="color" name="boxColor" value={allBoxObj.boxColor} onChange={changeHandler} className="form-control"></input>
            </label>

            <label className="p-1 text-light">Tab Height:
              <input type="number" name="boxHeight" value={allBoxObj.boxHeight} onChange={changeHandler} className="form-control"></input>
            </label>

            <label className="p-1 text-light">Tab Width:
              <input type="number" name="boxWidth" value={allBoxObj.boxWidth} onChange={changeHandler} className="form-control"></input>
            </label>

            <button className="btn btn-light p-1">Submit</button>
      </form>
    </div>
  )
}

export default Form1