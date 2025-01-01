import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     
      <div>
         <nav class="navbar navbar-expand-lg   bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NEW</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/">
           <a class="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        </li>    
        <li class="nav-item">
        <Link to="/counter">
          <a class="nav-link" href="#">Counter</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/calculator">
          <a class="nav-link" href="#">Calculator</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/tempconv">
          <a class="nav-link" href="#">TempConverture</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/calorie">
          <a class="nav-link" href="#">Calorie</a>
        </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BMI</a>
        </li>
         
         
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar