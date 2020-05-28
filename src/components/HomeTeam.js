import React from 'react';

import {useSelector} from 'react-redux';

function HomeTeam(props){

    const homeTeamId = props.homeTeamId;

    const allTeams = useSelector((state)=>{
    return state.teams
    })

   const currentHomeTeam = Object.keys(allTeams).forEach(function (item) {
	// console.log(item); // key
    return allTeams[item].id===homeTeamId; // value
});


    console.log(currentHomeTeam);
    
    return(
        <div>
            
    <p style={{textAlign: 'center'}}> Home Team  </p>
    <p> Crest & Full Name : </p>
    <p> Short Name </p>
    <p> Founded </p>
    <p> Colors </p>
    <p> Address </p>
    <p> Phone </p>
    <p> Email </p>
    <p> Website </p>
    <p> ClubColors </p>
    <p> Venue </p>

        </div>
    )
}

export default HomeTeam;