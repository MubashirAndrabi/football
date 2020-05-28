import React from 'react';

import {Badge} from 'antd';


function MatchdayInfo(props){

    // console.log(props);
    return(
        <>
        <Badge  style={{ backgroundColor: '#52c41a' }} count={props.name}/>
      
   

    <Badge count={"Matchday"+" "+props.current}/>
        

    </>
    )
}

export default MatchdayInfo;