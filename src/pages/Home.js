import React from 'react';
import PopularCompetitions from '../components/PopularCompetitions';
import AllScores from '../components/AllScores';
import { Row, Col } from 'antd';


function Home(){
    return(
<>
<Row>
    <Col span={6} >
    <PopularCompetitions/>
    </Col>
    <Col span={12} style={{marginLeft:"20px"}}>
    <AllScores/>
    </Col>
  </Row>
       
    </>
    )
}

export default Home;