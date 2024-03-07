import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuComponent from '../Menu Component/Menu';
import Bitcoin from '../BitCoin/Bitcoin';
import DistributionComponent from '../DistributionComponent/DistriBution';
import AboutBitCoin from '../AboutBitCoin Component/AboutBitCoin';
import TeamComponent from '../TeamComponent/Team';
import GetStarted from '../GetStarted/GetStarted';
import Text from '../Menu Component/Text';
import TrendingCoins from '../GetStarted/TrendingCoins';
import OtherCharts from '../DistributionComponent/OtherDias';
import Performance from '../Performance/Performance';
import Sentiment from '../Sentiment Component/Sentiment';
import { Container } from 'react-bootstrap';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function HomeScreen() {
  return ( 
  <Grid container spacing={0}>
     <Grid item xs={12} mb={12} lg={12} >
          <Item><MenuComponent/></Item>
        </Grid>
        <Grid item xs={12} mb={12} lg={12} >
          <Item><Text/></Item>
        </Grid>
    <Grid item sx={12}xs={12}sm={12} mb={12} lg={8}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        
        <Grid item sx={12}xs={12}sm={12} mb={12} lg={12} >
          <Item><Bitcoin/></Item>
        </Grid>
        <Grid item sx={12}xs={12}sm={12} mb={12} lg={12} >
          <Item><Performance/></Item>
        </Grid>
        <Grid item sx={12}xs={12}sm={12} mb={12} lg={12} >
          <Item><Sentiment/></Item>
        </Grid>
        <Grid item sx={12} xs={12} sm={12} mb={12} lg={12}>
          <Item><AboutBitCoin/></Item>
        </Grid>
        <Grid item  sx={12} xs={12} sm={12} mb={12} lg={12}>
          <Item><DistributionComponent/></Item>
        </Grid>
        <Grid item sx={12} xs={12} sm={12} mb={12} lg={12}>
          <Item><TeamComponent/></Item>
        </Grid>
      </Grid>
    </Box>
        </Grid>
        <Grid item sx={12} xs={12}sm={12} mb={12} lg={4} xl={4} xxl={4}>
        <Grid item sx={12} xs={12}sm={12} mb={12} lg={12} xl={12} xxl={12} >
          <Item><GetStarted/></Item>
        </Grid>
        <Grid item sx={12} xs={12}sm={12} mb={12} lg={12} xl={12} xxl={12} >
          <Item><TrendingCoins/></Item>
        </Grid>
        </Grid>
        <Grid item sx={12} xs={12}sm={12} mb={12} lg={12} xl={12} xxl={12} >
          <Item><OtherCharts/></Item>
        </Grid>
        </Grid>
       
  );
}
