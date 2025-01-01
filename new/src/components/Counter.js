import React from 'react'
import {useState} from 'react'

function Counter() {
 const [counter,setcounter]= useState(0)

function handleIncrement(){
  setcounter(counter+1)
  console.log(counter)
}
function handledeccrement(){
  setcounter(counter-1)
   console.log(counter)
}
function handlereset(){
  setcounter(0)
  console.log(counter)
}
  return (
  <div>
   <div class="container p-5  bg-secondary mx-auto border border-1 shadow" style={{width:"45%"}}>
    <h1 class="text-light text-center mt-2 ">counter app</h1>
     <div class="mb-3 mt-3">
       <input type="number " value={counter}  class="form-control mt-3"></input>
     </div>
    <div class="d-flex justify-content-around mt-5"> 
       <button class="btn btn-outline-light fs-5 fw-bold" onClick={handleIncrement}>+</button>
       <button class="btn btn-outline-light fs-5 fw-bold" onClick={handledeccrement}>-</button>
       <button class="btn btn-outline-light fs-5 fw-bold" onClick={handlereset}>Reset</button>
    </div>
    
   </div> 
  </div>
  )
}

export default Counter