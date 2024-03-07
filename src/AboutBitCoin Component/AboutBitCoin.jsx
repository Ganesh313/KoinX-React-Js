import './AboutBitCoin.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image1 from '../Images/Mobile.png'
import image2 from '../Images/Invest.png'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function AboutBitCoin(){
    return(<div className='maindiv1'>
       <h3>About Bitcoin</h3>
       <h6>What is Bitcoin ?</h6>
       <div>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from 
        its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply
         of 21 M BTC.
       </div>
       <h6>Lorem ipsum dolor sit amet</h6>
       <div>
        <div>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </div>
        <br></br>
        <div>
Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
</div>
<br></br>
<div>
Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
</div>
   <h6>Already Holding Crypto ?</h6>
  
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sx={12} md={12} lg={6}>
          <Item><Card  sx={{ display: 'flex',backgroundColor:'#79c1dc' }} >
     <CardMedia
        component="img"
        sx={{ width:'40%',height:'30%' ,padding:2,borderRadius:'10%'}}
        image={image2}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex',width:'30%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
       <h6 className='cardadjusting'>Calculate your
       <br></br>
       Profits
       <br></br>
      <Button  style={{ color: 'black', backgroundColor: 'white' }}>Check Now<ArrowForwardIcon/></Button>
       </h6>
        </CardContent>
      </Box>
    </Card></Item>
        </Grid>
        <Grid item  xs={12} sx={12} md={12} lg={6}>
          <Item><Card  sx={{ display: 'flex',backgroundColor:'#db5f4a', }} >
     <CardMedia
        component="img"
        sx={{ width:'40%',height:'30%' ,padding:2,borderRadius:'10%'}}
        image={image1}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex',width:'30%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <h6 className='cardadjusting'>Calculate your tax
       <br></br>
      liability
      <br></br>
      <Button  style={{ color: 'black', backgroundColor: 'white' }}>Check Now<ArrowForwardIcon/></Button>
       </h6>
        </CardContent>
      </Box>
    </Card></Item>
        </Grid>
      </Grid>
    </Box>
        </div>)
}