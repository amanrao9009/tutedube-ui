import React from 'react'
import { Link } from 'react-router-dom'

const ReferEarn = () => {
  return (
    <div className="wrap">

    <div className="index">
      <div>UI/UX {'>'}  Refer & Earn </div>
    </div>

    

    <div className='refer-wrap'>






       
       <div className="earning-section">






        <div className="earing-card">





              <div className="earing-card-up">

                <div className='earning-vals'>
                   <p>Referral Earning</p><span>₹ 2,500</span>
               </div>
                <div  className='earning-vals'   >
                   <p>Total Referrals</p><span> 7 </span>
                </div>
                 <div className='earning-vals'>
                    <p>Wallet Balance</p><span>₹ 500</span>
                 </div>


              </div>

               <div className="button-wrap">
                          <button>Withdraw Balance</button>
              </div>

        </div>
       


       </div>
        <div className="refer-code">
           <p>Your Referral Code </p>


                          <div>
                            <span>EDCH54</span>
                          </div>

                         

        </div>

    </div>
   
    
    <div className="working">


      <div className="work-heading">
        <p>How does it work ?</p>
      </div>


      <div className='task-wrap'>

      <div className="task">
        <div className="img-wrap">
          <img src="public/invite.png" alt="img" />
        </div>
        <div className='details'>
          <p>Invite your Friends</p>
          <samp>Share the link tutedude.com with your friends</samp>
        </div>
      </div>

      <div className="task">
        <div className="img-wrap">
          <img src="public/rupes.png" alt="img" />
        </div>
        <div className='details'>
          <p>You get ₹ 200 as referral money</p>
          <samp>On total purchase the friend makes, into your wallet</samp>
        </div>
      </div>

      <div className="task">
        <div className="img-wrap">
          <img src="public/walet.png" alt="img" />
        </div>
        <div className='details'>
          <p>Transfer money from wallet</p>
          <samp>When the wallet balance reaches
₹200 or more, you can withdraw it</samp>
        </div>
      </div>

      <div className="task">
        <div className="img-wrap">
          <img src="public/coupon.png" alt="img" />
        </div>
        <div className='details'>
          <p>Friend purchases any course</p>
          <samp>Using your REFERRAL CODE in the payments page</samp>
        </div>
      </div>

      <div className="task">
        <div className="img-wrap">
          <img src="public/discount.png" alt="img" />
        </div>
        <div className='details'>
          <p>Your Friend gets ₹ 200 Off </p>
          <samp>On his overall fee on successful purchase using your referral code </samp>
        </div>
      </div>


      </div>
      


      





    </div>
    <div className="dwd footer">
    <Link to="friends"><p>Friends Who Enrolled</p></Link>
      
      <p>Terms & Conditions</p>
    </div>


    </div>
  )
}

export default ReferEarn