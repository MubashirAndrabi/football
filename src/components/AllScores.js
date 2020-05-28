import React,{ useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { List, Avatar, Typography, Tag, Row, Col} from 'antd';

import {allScores} from '../ducks/scores';
import {useSelector} from 'react-redux';

import {useHistory} from 'react-router-dom';

function AllScores(){
    
    const history = useHistory();

    const dispatch = useDispatch();

    const results = useSelector((store)=>{
        return store.scores.results
       
    })

    const teams = useSelector((store)=>{
        return store.teams

    })

    useEffect(()=>{


            dispatch(allScores());


    },[])

    // console.log(results)



    return(

        <List
      header={<div> <h3> ALL SCORES </h3> </div>}
      footer={<div></div>}
      bordered
      style={{ marginTop:"20px"}}
      dataSource={results}
      renderItem={item => (
        <List.Item style={{height:"100px"}}>
            {/* <div onClick={()=>{
                return "Hello"
            }}>
            <Typography.Text> {item.homeTeam.name}</Typography.Text> <Avatar src={teams[item.homeTeam.id] &&  teams[item.homeTeam.id].crestUrl  }></Avatar> 
      <Tag>{item.score.winner}<br/><b> {item.score.fullTime.homeTeam} - </b> <b>{item.score.fullTime.awayTeam}</b></Tag>
      <Avatar src={teams[item.awayTeam.id] &&  teams[item.awayTeam.id].crestUrl }></Avatar><Typography.Text> {item.awayTeam.name}</Typography.Text>
            </div> */}
            {/* <a href="/currentmatch" style={{width:"100%"}} >  */}
            <a onClick={() => history.push({pathname:'/currentmatch/'+item.id})} style={{width:"100%"}} > 
            
    <Row style={{width:"100%",border: "2px solid grey"}} justify="center" align="middle">
      <Col span={10} style={{textAlign:"right",padding:"10px"}}>
      <Typography.Text strong>{item.homeTeam.name}</Typography.Text> <Avatar src={teams[item.homeTeam.id] &&  teams[item.homeTeam.id].crestUrl  }></Avatar> 
      </Col>


      <Col span={4} style={{textAlign:"center"}}>
          <Typography.Text disabled style={{fontSize:'10px'}}> {item.status}</Typography.Text>
          <div style={{ width: "100%",border: "1px solid grey",marginBottom:"23px"}}>
          <Typography.Text strong> {item.score.fullTime.homeTeam} - {item.score.fullTime.awayTeam} </Typography.Text>
          </div>      
      </Col>


      <Col span={10} style={{textAlign:"left",padding:"10px"}}>
      <Avatar src={teams[item.awayTeam.id] &&  teams[item.awayTeam.id].crestUrl }></Avatar> <Typography.Text strong> {item.awayTeam.name} </Typography.Text>
      </Col>


    </Row>

    </a>
         
        </List.Item>
      )}
    /> 
    )
}

export default AllScores;