import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './Bitcoin.css'
import { Avatar, Button, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import bitcoinimg from '../Images/bitcoin.png'
import bitcoin from '../Images/Bitcoin1.png'
const pData = [42000, 41600, 44560.33, 46953.33, 44000, 41000, 43000];
const xLabels = [
  '16 Dec',
  '17 Dec',
  '18 Dec',
  '19 Dec',
  '20 Dec',
  '21 Dec',
  '22 Dec',
];
export default function Bitcoin() {
  return (<div>
    <div className='d-flex'>
                    <Avatar>
                      <img className='img2' src={bitcoin}/>
                    </Avatar>       
    <h2 className='bit'>Bitcoin</h2>
    <p className='btc '>BTC</p>
    <div className='rank'>
    <Button  variant='contained'color='inherit' >Rank #1</Button></div>
    </div>
    <div className='d-flex'>
    <div className='price'>$46,953.04</div>
    <div className='increase'>2.51%<TrendingUpIcon/></div>
     <div className='btc'>(24H)</div>
    </div>
    <p>₹ 39,42,343</p>
    <div className=''>
      <Grid  container spacing={0}>
      <Grid className='h6' sx={12} xs={12}sm={12} mb={12} lg={6} xl={6} xxl={6}>
        Bitcoin Price Chart  (USD)
        </Grid> 
        <Grid className='h6 hh' sx={12} xs={12}sm={12} mb={12} lg={6} xl={6} xxl={6}>
       1H  24H  7D  1M  3M  6M  1Y  ALL
        </Grid> 
        </Grid>
    <LineChart
      width={350}
      height={250}
      series={[
        { data: pData, label: 'price' },
        
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    Referance Figure : 
    <img className='img2' src={bitcoinimg}/>
    </div>
    </div>
  );
}