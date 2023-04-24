import './App.css';
import React, { useState } from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import DisplayAllList from './components/DisplayAllList';

function App() {
//BOXES
  //import state at top, create empty array to hold what we want to keep in state (allBoxes) this parent can be passed to children
  
  //this will be an object that holds ONE individual box key:value of what we want to store, this parent can be passed to children
  const [allBoxObj, setAllBoxObj] = useState({
    boxColor: "",
    boxWidth: 50,
    boxHeight: 50
  })
  //need an array to hold all the boxes since we don't have a database yet
  const [boxArray, setBoxArray] = useState([])

  //also need to add each NEW box to state, could do this on each Form.jsx, but since we have 3 forms we will do it in 1 place here instead
  //use spread function to combine the new box w/prev boxes in state
  //because this is an onSubmit function, need to prevent default
  //we can pass this function down as props!!!
  const addBox = (e) => {
    e.preventDefault()
    setBoxArray ([...boxArray, allBoxObj])
    console.log("ARRRAAAAYYYYY --->", boxArray)
  }

  //need to keep track of changes made from user on form, make sure name on form input matches name  in allBoxObj! 
  //pass this function down as props!
  const changeHandler = (e) => {
    //update state for box object
    setAllBoxObj({
      ...allBoxObj, 
      [e.target.name] : e.target.value
  })
  }
  

//TABS
  //You can pass in components!
  const [tabArray, setTabArray] = useState([<Form1 />, <Form2 />, <Form3 />])

  //create a piece of state to display the tab forms w/condition to render tabs
  //use in ternary in <div> below
  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })

  //Tab link onClick function to render tab clicked/how to pass in to JavaScript the tab we want to render, we know we need to grab something to identify the link(index) and then, update our state to true/false - so call on our state if meets condition
  const handleTabChange = (e, idx) => {
    e.preventDefault()
    console.log("INDEX -----> ", idx)
    //if idx (index passed in from onClick .map === 0 for index[0])
    if (idx === 0) {
      setDisplayTab({
        tab1: true,
        tab2: false,
        tab3: false
      })
    }
      if (idx === 1) {
        setDisplayTab({
          tab1: false,
          tab2: true,
          tab3: false
        })
      }
        if (idx === 2) {
          setDisplayTab({
            tab1: false,
            tab2: false,
            tab3: true
          })
        }
      }

      return (
        <div className="App">
          <header className="App-header">
            <h1>Taboxerator</h1>
          </header>
          <div className="main-container col-md-6 offset-3">
            <ul className="list-group list-group-horizontal-md offset-4">
              {/* want to map over array and map over how many items are in it */}
              {/* map returns the array after applying the function we want to it, takes 3 parameters, currentVal, currentIndex, currentArray */}
              {/* REMEMBER JavaScript must be within curly brackets in html section*/}
              {/* use string interpolation to use variable*/}
              {/* need a key in javaScript to display, pass in 2 parameters as we have in function  */}
              {
                tabArray.map((tab, i) => (
                  <div key={i}><button className="btn btn-light p- m-1" onClick={(e) => handleTabChange(e, i)}>{`Tab ${i}`}</button></div>
                ))
              }
            </ul>

            {/* Ternary to conditionally render/display tab if truthy, if not, display nothing, otherwise, all 3 forsm would show on div at same time */}
            {/* pass state to Form component */}
            {
              displayTab.tab1 ? <Form1 
              allBoxObj={allBoxObj} 
              setAllBoxObj={setAllBoxObj} 
              boxArray={boxArray} 
              setBoxArray={setBoxArray}
              addBox = {addBox}
              changeHandler={changeHandler}
              /> 
              : null
            }
            {
              displayTab.tab2 ? <Form2 
              allBoxObj={allBoxObj} 
              setAllBoxObj={setAllBoxObj} 
              boxArray={boxArray} 
              setBoxArray={setBoxArray}
              addBox = {addBox}
              changeHandler={changeHandler}
              /> 
              : null
            }
            {
              displayTab.tab3 ? <Form3 
              allBoxObj={allBoxObj} 
              setAllBoxObj={setAllBoxObj} 
              boxArray={boxArray} 
              setBoxArray={setBoxArray}
              addBox = {addBox}
              changeHandler={changeHandler}
              /> 
              : null
            }


            {/* Display component for all boxes created */}
            <DisplayAllList boxArray={boxArray} setBoxArray={setBoxArray}/>
          </div>

        </div>
      );
    }
  export default App;
