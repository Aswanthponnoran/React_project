import React from 'react'
import { useState } from 'react'
function Calculator() {

    const [num1,setnum1]=useState()
    const [num2,setnum2]=useState()
    const [result,setresult]=useState()

    function input1(event){
       
        setnum1(event.target.value)
      

    }
    function input2(event){
        setnum2(event.target.value)
    }
    function add(){
    setresult(Number(num1)+Number(num2))
    }
    function sub(){
      setresult(Number(num1)-Number(num2))
    }
    function mul(){
        setresult(Number(num1)*Number(num2))
    }  
    function div(){
      setresult(Number(num1)*Number(num2))
  }

  return (
    <div><div class="container p-5 bg-secondary  mt-3 text-light mx-auto border border-1 shadow" style={{width:"35%"}}>

    <h3 class="text-center text-light mt-2">Calculator App</h3>
    <div class="mb-3 mt-3">
        <label class="form-label">Number1</label>
    <input type="number" class="form-control" onChange={input1} placeholder="Enter Number1"></input></div>
    <div class="mb-3 mt-3">
    <label class="form-label">Number2</label>
    <input type="number" class="form-control" onChange={input2} placeholder="Enter Number2"></input></div>
    <div class="d-flex justify-content-around mt-5">
    <button class="btn btn-outline-light fs-5 fw-bold" onClick={add}>+</button>
    <button class="btn btn-outline-light fs-5 fw-bold" onClick={sub}>-</button>
    <button class="btn btn-outline-light fs-5 fw-bold" onClick={mul}>*</button>
    <button class="btn btn-outline-light fs-5 fw-bold" onClick={div}>/</button>
    
    </div>
    <h3 class="text-center text-light mt-4">Result is {result}</h3>
</div>
</div>
  )
}

export default Calculator