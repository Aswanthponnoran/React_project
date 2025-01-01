// import React from 'react'

// function Comp(props) {
//     console.log(props)
//   return (
//     <div>
//         {props.name}
//         {props.age}

//         </div>
//   )
// }
// export default Comp


import React from 'react'

function Comp({name,fun}) {
    console.log(name)
  return (
    <div>
    <div>{name}</div>
    <button onClick={fun}>click</button>
    </div>
  )
}

export default Comp