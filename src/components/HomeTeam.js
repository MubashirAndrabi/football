import React from 'react';

import {useSelector} from 'react-redux';
import {Avatar} from 'antd';

function HomeTeam(props){

    const homeTeamId = props.homeTeamId;

    const allTeams = useSelector((state)=>{
    return state.teams
    })

   const currentHomeTeam = allTeams[homeTeamId]


    // console.log(currentHomeTeam);
    
    return(
        <div>
            
    <p style={{textAlign: 'center'}}> Home Team: </p>
    <p> Country: {currentHomeTeam.area.name}</p>
    <p> Crest & Full Name : <Avatar src={currentHomeTeam.crestUrl}></Avatar> {currentHomeTeam.name}</p>
    <p> Short Name : {currentHomeTeam.shortName} </p>
    <p> Founded: {currentHomeTeam.founded} </p>
    <p> Colors: {currentHomeTeam.clubColors} </p>
    <p> Address: {currentHomeTeam.address} </p>
    <p> Phone: {currentHomeTeam.phone} </p>
    <p> Email: {currentHomeTeam.email} </p>
    <p> Website: {currentHomeTeam.website} </p>
    <p> Venue: {currentHomeTeam.venue} </p>

        </div>
    )
}

export default HomeTeam;