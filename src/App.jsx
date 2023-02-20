import React from 'react'
import Button from './Button'
const App = () => {
  return (
    <>
    <link rel="stylesheet" 
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <div className='body'>
    <div className='msg'>
    <div className='circle'></div>
    <div className='msg1'>Hello health-coach,</div>
    <div className='msg2'>welcome to Healmeright's CoachPit!</div>
</div>
    <div className='block'>
    <div className='heading'>Login to your account</div>
    <div className='one'>
    <div className='container1'>Username</div>
    <div className='input-icons'>
<i class="fa fa-user-circle-o"></i>
    <input type="text" className='input-field'></input>
    </div>
    </div>
    <div className='two'>
    <div className='container2'>Password</div>
    <div className='input-icons'>
    <i class="fa fa-key"></i>
    <input type="text" className='input-field'></input>
    </div>
    </div>
    <Button/>
    </div>

</div>
    </>
  )
}

export default App