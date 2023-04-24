import React from 'react'

const Form3 = ({allBoxObj, setAllBoxObj, boxArray, setBoxArray, addBox, changeHandler}) => {
  return (
    <div className="bg-light p-3 rounded">
      {/* onSubmit we call on the addBox function that puts each new box in state */}
      <form className="form-inline" onSubmit = {addBox}>
            <label className="p-1">Tab Color:
              {/* allBoxObj is the getter for the function holding box style attributes */}
              {/* we need to keep track of form changes made w/changeHandler function */}
              <input type="color" name="boxColor" value={allBoxObj.boxColor} onChange={changeHandler} className="form-control"></input>
            </label>

            <label className="p-1">Tab Height:
              <input type="number" name="boxHeight" value={allBoxObj.boxHeight} onChange={changeHandler} className="form-control"></input>
            </label>

            <label className="p-1">Tab Width:
              <input type="number" name="boxWidth" value={allBoxObj.boxWidth} onChange={changeHandler} className="form-control"></input>
            </label>

            <button className="btn btn-dark p-1">Submit</button>
      </form>
    </div>
  )
}

export default Form3