import './GetStarted.css'
import getStarted from '../Images/get Stared for free.png'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function GetStarted(){
    return(<div className="getstarted">
       <h2>Get Started With KoinX
        <br></br>
For FREE
       </h2>
       <p>With our range of features that you can equip for<br></br> for free , koinX allows you to be more educated and <br></br>aware of your tax reports</p>
       <img className='img1' src={getStarted}/><br></br>
       <Button  style={{ color: 'black', backgroundColor: 'white' }}>Get Started for FREE<ArrowForwardIcon/></Button>
         </div>)
}