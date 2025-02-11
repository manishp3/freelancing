import React from 'react'
import "./Who.css"
import second from "../Assets/second.png"
import CallMadeIcon from '@mui/icons-material/CallMade';
const who = () => {
  return (
    <>
     <div className="who">
        <div className="img_1">
          <img src={second} alt=""/>
        </div>
        <div className="right_1">
          <h1>Who We Are</h1>
          <hr/>
          <h3>Trust in Shilp,Build Your Future</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas nulla, saepe cumque recusandae quisquam reprehenderit iusto odio doloribus. Asperiores velit doloremque, commodi amet cum, minima sint, nam numquam consectetur autem incidunt unde ad.</p>
          <button>About Us
          <CallMadeIcon/>
          </button>
        </div>
      </div> 
    </>
  )
}

export default who