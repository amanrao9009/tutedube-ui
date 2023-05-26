import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
const FriendsRefer = () => {
  return (
    <>
      {/* <Header></Header> */}

    

      <div className="wrap">

      <div className="index">
        <div>UI/UX {'>'}  Refer & Earn  {'>'} Friends Referred </div>
      </div>

     <Link to="/"><img src="public/goback.png" alt="img" className="goback" /></Link> 

      
     <div className='code-wallet'>
        <div className="code">
            <p>Your Referral Code </p>
            <span>EDCH54</span>
        </div>
        <div className="wallet">
            <p>Wallet Balance</p>
            <span>₹ 500</span>
        </div>
     </div>

     <div className="friends-seciton">
        <div className="friend-heading">
       <p> Friends who enrolled <span>(3)</span> </p> 
        </div>

        <div className="friend-cards">

            <div className="single-card">
                <div className="name-date">
                    <p>Dhiraj Saxsena</p>
                     <span>14 Sep, 2022</span>
                </div>
                <div className="courses">Courses Enrolled(6)</div>

                <div className="topics">
                    <div>UI/UX</div>
                    <div>Photoshop</div>
                    <div>Illustrator</div>
                    <div>Python</div>
                    <div>MERN</div>
                    <div>Java</div>

                </div>

                <div className="amount">
                 <p>Referral Amount </p><span>₹185</span>
                </div>
            </div>


            <div className="single-card">
                <div className="name-date">
                    <p>Dhiraj Saxsena</p>
                     <span>14 Sep, 2022</span>
                </div>
                <div className="courses">Courses Enrolled(6)</div>

                <div className="topics">
                    <div>UI/UX</div>
                    <div>Photoshop</div>
                    <div>Illustrator</div>
                    <div>Python</div>
                    <div>MERN</div>
                    <div>Java</div>

                </div>

                <div className="amount">
                 <p>Referral Amount </p><span>₹185</span>
                </div>
            </div>

            <div className="single-card">
                <div className="name-date">
                    <p>Dhiraj Saxsena</p>
                     <span>14 Sep, 2022</span>
                </div>
                <div className="courses">Courses Enrolled(6)</div>

                <div className="topics">
                    <div>UI/UX</div>
                    <div>Photoshop</div>
                    <div>Illustrator</div>
                    <div>Python</div>
                    <div>MERN</div>
                    <div>Java</div>

                </div>

                <div className="amount">
                 <p>Referral Amount </p><span>₹185</span>
                </div>
            </div>                        
        </div>

        

        
     </div>



      
     
      <div className="footer fetr">
        
        <p>Terms & Conditions</p>
      </div>


      </div>

   
    </>
  )
}

export default FriendsRefer