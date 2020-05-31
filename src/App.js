import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import {Layout, Row, Col} from 'antd';
import AllScores from './components/AllScores';
import PopularCompetitions from './components/PopularCompetitions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  CurrentMatch from './components/CurrentMatch';
import Standings from './components/Standings';
import Europe from './components/Europe';
import England from './components/England';
import SwitchStandings from './components/SwitchStandings';
import News from './components/News';

function App() {
  return (

    <Router>

    <Layout className="layout">
    <Layout.Header>
      <Header/>
    </Layout.Header>


    <Layout.Content style={{ padding: '0 50px' }}>


    <Row>
      

    <Col span={6} >
    <PopularCompetitions/>
    </Col>


    <Col span={12} style={{marginLeft:"20px"}}>


      <Route path="/currentmatch/:matchid" render={(props)=>{
        return <CurrentMatch {...props}/>
      }}/>

      <Route path="/" exact render={props=> <AllScores/>}/>

      {/* <Route path="/standings/:positionid" render={(props)=>{
        return <Standings {...props}/>
      }}/> */}

      <Route path="/standings/:positionid" render={(props)=>{
        return <SwitchStandings {...props}/>
      }}/>
      
      <Route path='/europe' render={(props)=>{
        return <Europe {...props}/>
      }}/>

      <Route path="/england" render={(props)=>{
        return <England {...props}/>

      }}/>

    </Col>

    <Col span={5} style={{marginLeft:"20px"}}>
    <h2 style={{marginTop:"20px"}}> News Feed </h2>

      <News/>
    </Col>
  </Row>



    </Layout.Content>


    <Layout.Footer style={{ textAlign: 'center' }}>Football Scores ©2019 </Layout.Footer>
  </Layout>
    
  </Router>
  );
}

export default App;
