import React from 'react'
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
const LandingHomePage = () => {
  return (
    <div className='Landingusehomepage'>
        <div className='searchfilter'>
            <form action="">
                <div className='si1'>
                    <DepartureBoardIcon/>
                    <input placeholder='From' type="text" name='' id='' />
                </div>
                <div className='si2'>
                    <DirectionsBusIcon/>
                <input placeholder='To' type="text" name='' id='' />
                </div>
                <div className='si3'>
                <input placeholder='Date' type="date" name='' id='' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LandingHomePage