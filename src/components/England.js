import React,{useState,useEffect} from 'react';

import{Row, Col, Avatar, Typography, List} from 'antd';

import Axios from 'axios';

function England(){

  const[england, setEngland] = useState();

    useEffect(()=>{
        Axios.get("https://api.football-data.org/v2/competitions/2021", {
	"headers": {
		'X-Auth-Token': '78c344381c794ce880b288d279bb81a0'
	}
}).then((response)=>{
    setEngland(response.data.seasons.map((item)=>{

        return item;

    }))

}).catch((error)=>{
    console.log(error)

})
    },[])

    // console.log(england)


    return(

        <List
        itemLayout="horizontal"
        dataSource={england}
        renderItem={item => (
            
          <List.Item>
              
        <Row style={{width:"100%",border: "1px solid grey"}} justify="center" align="middle">
    
        <Col span={4}><Typography>{item.startDate}</Typography></Col>
        <Col span={4}><Typography>{item.endDate}</Typography></Col>
        {/* <Col span={3}><Typography>{item.winner.name}</Typography></Col> */}
        {/* <Col span={2}><Avatar src={item.winner.crestUrl}/></Col> */}
        <Col span={4}><Typography>  </Typography></Col>
        <Col span={2}><Typography>  </Typography></Col>

        
        
            </Row>
          </List.Item>
        )}
      />
      

    )
}

export default England;