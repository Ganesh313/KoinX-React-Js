import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import './Performance.css'
import { Grid } from '@mui/material';
import funda1 from '../Images/fundamentals1.png'
import funda2 from '../Images/fundamentals2.png'
export default function Performance() {
  return (<div >
    <h1>Performance</h1>
    <div className='d-flex '>
    <div className='today '>Todays Low
    <br></br>
    46,930.22
    </div>
    <Stack sx={{ width: '70%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary"variant="determinate" value={100} />
    </Stack>
    <div className='today'>Todays High
    <br></br>
    46,343.83
    </div>
    </div>
    <div className='d-flex secondary'>
    <div className='today'>52W Low
    <br></br>
    16,930.22
    </div>
    <Stack sx={{ width: '70%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary"variant="determinate" value={100} />
    </Stack>
    <div className='today'>52W High
    <br></br>
    49,743.83
    </div>
    </div>
    <h3>Fundamentals</h3>
    <Grid container>
<Grid sx={12} xs={12}sm={12} mb={12} lg={6} xl={6} xxl={6}  style={{marginTop:'1%'}}><img className='img2'src={funda1}/></Grid>
<Grid sx={12} xs={12}sm={12} mb={12} lg={6} xl={6} xxl={6} style={{marginTop:'1%'}}><img className='img2'src={funda2}/></Grid>
  </Grid> 
    </div>
  );
}
