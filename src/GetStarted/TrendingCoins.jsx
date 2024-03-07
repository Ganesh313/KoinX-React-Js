import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material'
import './GetStarted.css'
import FolderIcon from '@mui/icons-material/Folder';
import bitcoin from '../Images/Bitcoin1.png'
import ETH from '../Images/ETH.png'
import polygon from '../Images/Polygon.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export default function TrendingCoins(){
    return(<div>
        <h4>Trending Coins (24H)</h4>
       <List>
        <ListItem>  <ListItemAvatar>
                    <Avatar>
                    <img className='img2' src={ETH}/>
                    </Avatar>
                  </ListItemAvatar>
                Ethereum(ETH)
                <div className='increase1'>8.21%<TrendingUpIcon/></div>
                </ListItem>
        <ListItem> <ListItemAvatar>
                    <Avatar>
                      <img className='img2' src={bitcoin}/>
                    </Avatar>
                  </ListItemAvatar>
                  Bitcoin (BTC)  
                  <div className='increase1'>5.26% <TrendingUpIcon/></div>  </ListItem>
        <ListItem> <ListItemAvatar>
                    <Avatar>
                    <img className='img2' src={polygon}/>
                    </Avatar>
                  </ListItemAvatar>
                  Polygon(MATIC)
                  <div className='increase1'>4.32%<TrendingUpIcon/></div>
                </ListItem>
        </List>
        </div>)
}