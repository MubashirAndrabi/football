import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { List, Avatar, Row, Col, Typography } from 'antd';
import './Standings.css';

function StandingsAway(props){

    const[standings, setStandings] = useState([]);

    const position = props.match.params.positionid;

    console.log(position)


    useEffect(()=>{

        Axios.get("https://api.football-data.org/v2/competitions/"+position+"/standings", {
	"headers": {
		'X-Auth-Token': '78c344381c794ce880b288d279bb81a0'
	}
}).then((response)=>{
    
        setStandings(response.data.standings[2]);   
    
   

}).catch((error)=>{
    console.log(error)
})

    },[position])

    console.log(standings);

    return(
<>
        <Row style={{width:"100%",border: "1px solid grey", marginTop:"20px"}} justify="center" align="middle">
        <Col span={2}> Position</Col>
        <Col span={2}> </Col>
        <Col span={2}> Team  </Col>
        <Col span={2}> Played </Col>
        <Col span={2}> Won </Col>
        <Col span={2}> Drew </Col>
        <Col span={2}> Lost </Col>
        <Col span={2}> Goals For</Col>
        <Col span={2}> Goals Against </Col>
        <Col span={2}> Goal Difference </Col>
        <Col span={2}> Points </Col>



        </Row>
        <List
    itemLayout="horizontal"
    dataSource={standings.table}
    renderItem={item => (
      <List.Item>
          
    <Row style={{width:"100%",border: "1px solid grey"}} justify="center" align="middle">

    <Col span={2}><Typography>{item.position}</Typography></Col>
    <Col span={2}><Avatar src={item.team.crestUrl}/></Col>
    <Col span={4}><Typography> {item.team.name} </Typography></Col>
    <Col span={2}><Typography> {item.playedGames} </Typography></Col>
    <Col span={2}><Typography> {item.won} </Typography> </Col>
    <Col span={2}><Typography> {item.draw} </Typography> </Col>
    <Col span={2}><Typography> {item.lost} </Typography> </Col>
    <Col span={2}><Typography> {item.goalsFor} </Typography> </Col>
    <Col span={2}><Typography> {item.goalsAgainst} </Typography> </Col>
    <Col span={2}><Typography> {item.goalDifference} </Typography> </Col>
    <Col span={2}><Typography> {item.points} </Typography> </Col>
        </Row>
      </List.Item>
    )}
  />
  </>
    )
}

export default StandingsAway;