import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './Distribution.css'
const data = [
  { value: 80, label: 'Crowdsale Investor',color:'#2b8aca' },
  { value: 20, label: 'Foundation',color:'#ec9b66' },
];
export default function DistributionComponent() {
  return (<div className='maindivv'>
    <h2>Tokenomics</h2>
  <h4>Initial Distribution</h4>
  <PieChart series={[{ data, innerRadius: 95 }]} 
   width={400}
         height={300}
         slotProps={{
           legend: { hidden: true },
         }}>
    </PieChart>
    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
    </div>
  );
}
