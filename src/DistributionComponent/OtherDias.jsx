import { Grid } from "@mui/material";
import BNB from '../Images/BNB.png'
import SOL from '../Images/SOL.png'
import XRP from '../Images/XRP.png'
import ADA from '../Images/ADA.png'
import AVAX from '../Images/AVAX.png'
import BTC from '../Images/BTC.png'
import ETH from '../Images/eth copy.png'
import stETH from '../Images/stETH.png'
import UNI from '../Images/ENI.png'
import CFG from '../Images/CFG.png'

export default function OtherCharts(){
return(<div>
    <h4>You May Also Like</h4>
    <Grid container  >
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img  className="img2"src={BNB}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2" src={SOL}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2" src={XRP}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2"src={ADA}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2"src={AVAX}/>
</Grid>
    </Grid>
    <h4>Trending Coins</h4>
    <Grid container  >
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img  className="img2"src={BTC}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2" src={ETH}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2" src={stETH}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2"src={UNI}/>
</Grid>
<Grid sx={4} xs={4} sm={4} mb={4} lg={2.4}>
    <img className="img2"src={CFG}/>
</Grid>
    </Grid>
</div>)
}