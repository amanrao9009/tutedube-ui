import { useState } from 'react'
import { Route ,  Routes  } from 'react-router-dom'
import './App.css'


import Header from './components/header'
import ReferEarn from './components/ReferEarn'
import FriendsRefer from './components/Friends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     
      <Header></Header>

      <Routes>
        <Route path="" element={<ReferEarn />} />
        <Route path="/friends" element={<FriendsRefer />} />
      </Routes>



  

     

   
    </>
  )
}

export default App
