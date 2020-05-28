import React, {useState, useEffect } from 'react';

import {useSelector} from 'react-redux';
import {Card, Row, Col, Badge} from 'antd';
import {useDispatch} from 'react-redux';
import {currentMatch} from '../ducks/scores';
import {allScores} from '../ducks/scores';
import HomeTeam from './HomeTeam';

function CurrentMatch(props){

  const teamId = props.match.params.matchid;

  const dispatch = useDispatch();

   const results = useSelector((store)=>{
       return store.scores.results

   })
   const teams = useSelector((store)=>{
    return store.teams

})
  //  console.log(teams)
   

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
          <Col span={9}> <span style={{height: "100px", width:"100px", backgroundColor:"#bbb", borderRadius:"50%", display:"inline-block"}}></span> </Col>
          <Col span={6}> 
          <Badge count={match.status} style={{ backgroundColor: '#bbb' }} />
          <div> {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam} </div>
          <div> {new Date(match.utcDate).toDateString()} </div>
          
          </Col>
          <Col span={9}> <span style={{height: "100px", width:"100px", backgroundColor:"#bbb", borderRadius:"50%", display:"inline-block"}}/> </Col>
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

    <p style={{textAlign: 'center'}}> Away Team  </p>
    <p> Crest & Full Name </p>
    <p> Short Name </p>
    <p> Founded </p>
    <p> Colors </p>
    <p> Address </p>
    <p> Phone </p>
    <p> Email </p>
    <p> Website </p>
    <p> ClubColors </p>
    <p> Venue </p>

    </Card.Grid > 
   
    </Card>) : null

    




        
    )
}

export default CurrentMatch;