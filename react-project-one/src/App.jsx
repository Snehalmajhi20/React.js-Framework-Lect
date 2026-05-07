// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import img1 from './assets/Chatrapati shivaji maharaj.jpg'
import img2 from './assets/Maharana Pratab.jpg'
import img3 from './assets/Great Ashoka.jpg'

import UserCards from "./components/UserCards"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 id='hero-title'>Hello,Welcome to my page!</h1>
      <div className="user-cards">
        <UserCards name="Chatrapati shivaji maharaj" desc="desc-1" image={img1}/>
        <UserCards name="Maharana Pratab" desc="desc-2" image={img2}/>
        <UserCards name="Great Ashoka" desc="desc-3" image={img3}/>
      </div>
    </div>
  )
}

export default App
