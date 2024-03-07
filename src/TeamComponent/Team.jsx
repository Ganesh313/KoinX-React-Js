import './Team.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import jhon from '../Images/Jhon Smith.png'
import jhonSmith from '../Images/johnSmith.png'
import williams from '../Images/elina williams.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'rgb(140, 166, 205)' ? 'rgb(140, 166, 205)' : 'rgb(140, 166, 205)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
export default function TeamComponent(){
    return(<div className='maindiv'>
        <p className="heading col-12">Team</p>
        <div>Lorem ipsum dolor sit amet consectetur .Id consequat adipiscing arcu nibh.eget mattis in mi integer sit egestas. proin tempor id pretium quam.Facilisis purus convallis quam augue</div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5} >
        <Grid item xs={12} md={12} lg={3}>
          <Item className='person' ><img className='img'src={jhon}></img>
          <h5 >John Smith</h5>
          <p >Designation hear</p>
          </Item>
        </Grid>
        <Grid item xs={12}md={12} lg={9}>
        <Item className='grid'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</Item>
        </Grid>
        <Grid item xs={12}md={12} lg={3}>
          <Item className='person' ><img className='img' src={williams}></img>
          <h5>Elina Williams</h5>
          <p>Designation hear</p>
          </Item>
        </Grid>
        <Grid item xs={12}md={12} lg={9}>
        <Item className='grid'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu </Item>
        </Grid>
        <Grid item xs={12}md={12} lg={3}>
          <Item className='person' ><img className='img' src={jhonSmith}></img>
          <h5>John Smith</h5>
          <p>Designation hear</p></Item>
        </Grid>
        <Grid item xs={12}md={12} lg={9}>
        <Item className='grid'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</Item>
        </Grid>
      </Grid>
    </Box>
   </div>)
}