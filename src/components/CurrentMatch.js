import React, {useState, useEffect } from 'react';

import {useSelector} from 'react-redux';
import {Card, Row, Col, Badge} from 'antd';
import {useDispatch} from 'react-redux';
import {currentMatch} from '../ducks/scores';
import {allScores} from '../ducks/scores';
import HomeTeam from './HomeTeam';
import AwayTeam from './AwayTeam';

function CurrentMatch(props){

  const teamId = props.match.params.matchid;

  const dispatch = useDispatch();

   const results = useSelector((store)=>{
       return store.scores.results

   })
   const teams = useSelector((store)=>{
    return store.teams

})
   console.log(teams)
   

  const match = results.find((item)=>{

    return item.id==teamId;
  })
  console.log(match);


  useEffect(()=>{
    if(!results.length){
      dispatch(allScores());
    }
  },[])

    return(
        

        match ? 
        (<Card>
        <Card.Grid hoverable={false} style={{width: '100%'}}>
      <p style={{textAlign: 'center'}}> {match.competition.name} </p>
      <Row style={{textAlign:'center'}}>
          <Col span={9}><img src={teams[match.homeTeam.id].crestUrl} width="100" height="100"></img> </Col>
          <Col span={6}> 
          <Badge count={match.status} style={{ backgroundColor: '#bbb' }} />
          <div> {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam} </div>
          <div> {new Date(match.utcDate).toUTCString()} </div><br/>
          <div> Venue: {teams[match.homeTeam.id].venue} </div>
          
          </Col>
          <Col span={9}> <img src={teams[match.awayTeam.id].crestUrl} width="100" height="100"></img> </Col>
    </Row>
    </Card.Grid>

    <Card.Grid hoverable={false} style={{width: '100%'}}>
        <Row > Full-Time Score: {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</Row>
        <Row > Half-Time Score: {match.score.halfTime.homeTeam} - {match.score.halfTime.awayTeam} </Row>
        <hr/>

        
        <Row > Refree:  </Row>

    </Card.Grid>
    <br/>
    <Card.Grid hoverable={false} style={{width: '100%'}}>
      <HomeTeam homeTeamId={match.homeTeam.id}/>

    </Card.Grid > 
    <Card.Grid hoverable={false} style={{width: '100%'}}>
      <AwayTeam awayTeamId={match.awayTeam.id}/>
    </Card.Grid > 
   
    </Card>) : null

    




        
    )
}

export default CurrentMatch;