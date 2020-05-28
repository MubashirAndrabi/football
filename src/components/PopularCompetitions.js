import React,{useEffect} from 'react';
import { List, Avatar } from 'antd';

import {useDispatch} from 'react-redux';
import MatchdayInfo from './MatchdayInfo';

import {competition} from '../ducks/competitions';
import {useSelector} from 'react-redux';
import Standings from './Standings';
import {useHistory} from 'react-router-dom';

function PopularCompetitions(){

  const history = useHistory();

    const dispatch = useDispatch();



    const popularLeagues = useSelector((store)=>{
      return store.competitions.leagues
    })



    useEffect(()=>{
        dispatch(competition())
  },[])


   const leagues = []

  //  console.log(popularLeagues)

    return(
          

            

         <List
          size="small"
          header={<div><h3> Popular Leagues</h3>  </div>}
          bordered
          style={{maxWidth:"330px", marginTop:"20px"}}
          dataSource={popularLeagues}
          renderItem={item => {
         return (
           <>
           <a onClick={() => history.push({pathname:'/standings/'+item.id})} style={{width:"100%"}} > 
          <List.Item style={{border: "1px solid grey"}}>
        <List.Item.Meta
          avatar={<Avatar src={item.area.ensignUrl} />}
          title={item.area.name}
          // description={item.name + "Current Matchday" + item.currentSeason.currentMatchday}
          description={<MatchdayInfo name={item.name} current={item.currentSeason.currentMatchday}/>}
        />
      </List.Item>
      </a>
          
        
          </>
         )
        
         
        
        
        }}
        />
          

            
    )
}

export default PopularCompetitions;