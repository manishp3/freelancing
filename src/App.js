import React from 'react'
import Navbar from './navBar/NavBar'
import Who from './who/Who';
import Service from './service/Service';
import Vision from './vision/Vision';
import Commerce from './Commercial/Commerce';
import Blog from './Blogs/Blog';
import Testimo from './testimo/Testimo';
import About from './about/About';
import ScrollTop from './scrollTop/ScrollTop';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Who/>
        <Service/>
        <Vision/>
        <Commerce/>
        <Blog/>
        <Testimo/>
        <About/>
        <ScrollTop/>
    </div>
  )
}

export default App