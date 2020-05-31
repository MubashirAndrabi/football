import React from 'react';

import {useSelector} from 'react-redux';
import {Avatar} from 'antd';

function HomeTeam(props){

    const awayTeamId = props.awayTeamId;

    const allTeams = useSelector((state)=>{
    return state.teams
    })

   const currentAwayTeam = allTeams[awayTeamId];
    
    return(
        <div>
            
    <p style={{textAlign: 'center'}}> Away Team: </p>
    <p> Country: {currentAwayTeam.area.name}</p>
    <p> Crest & Full Name : <Avatar src={currentAwayTeam.crestUrl}></Avatar> {currentAwayTeam.name}</p>
    <p> Short Name : {currentAwayTeam.shortName} </p>
    <p> Founded: {currentAwayTeam.founded} </p>
    <p> Colors: {currentAwayTeam.clubColors} </p>
    <p> Address: {currentAwayTeam.address} </p>
    <p> Phone: {currentAwayTeam.phone} </p>
    <p> Email: {currentAwayTeam.email} </p>
    <p> Website: {currentAwayTeam.website} </p>
    <p> Venue: {currentAwayTeam.venue} </p>

        </div>
    )
}

export default HomeTeam;