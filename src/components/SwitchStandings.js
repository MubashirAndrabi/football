import React,{useState} from 'react';

import { Radio } from 'antd';
import Standings from './Standings';
import StandingsHome from './StandingsHome';
import StandingsAway from './StandingsAway';


function SwitchStandings(props){

    const[table,setTable] = useState('overall')

    console.log(table)

    return(
        <>
        <h2 style={{textAlign:"center",marginTop:"20px"}}>Standings</h2>
        <Radio.Group  onChange={(e)=>{
            setTable(e.target.value)
            }} defaultValue="overall" style={{marginLeft:"215px"}}>
      <Radio.Button value="overall" >Overall</Radio.Button>
      <Radio.Button value="home">Home</Radio.Button>
      <Radio.Button value="away">Away</Radio.Button>
    </Radio.Group>
   

    {table=='home' ? <StandingsHome {...props}/> : table=='away' ? <StandingsAway {...props}/> : <Standings {...props}/>}
    
     </>
    )
}

export default SwitchStandings;