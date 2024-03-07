import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import './Sentiment.css'
import { Grid } from '@mui/material';
import estimation from '../Images/estimations.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
export default function Sentiment(){
    return(<div>
        <h1>Sentiment</h1>
        <div className='d-flex'>
        <h3>Key Events</h3><ErrorOutlinedIcon  className='icon' /></div>
        <Grid container >
            <Grid sx={12}xs={12}sm={12} mb={12} lg={5.5}className='blue' >
            <div className='d-flex'>
        <div ><ViewTimelineIcon/></div>
        <h6>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur mac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
        </Grid>
        <Grid sx={12}xs={12}sm={12} mb={12} lg={5.5}className='green' >
            <div className='d-flex'>
        <div ><TrendingUpIcon/></div>
        <h6>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h6>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur mac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
        </Grid>
        </Grid>
        <div className='d-flex'>
        <h3>Analist Estimates</h3><ErrorOutlinedIcon  className='icon' /></div>
        <Grid container sx={12}xs={12}sm={12} mb={12} lg={12}>
      <img className='img2'src={estimation}/>
        </Grid>
        </div>)
}