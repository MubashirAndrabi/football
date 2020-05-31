import React,{useEffect} from 'react';
import { Card, List, Avatar} from 'antd';

import {useDispatch} from 'react-redux';
import {fetchNews} from '../ducks/news';

import {useSelector} from 'react-redux';

function News(){

    const dispatch = useDispatch();

    const news =  useSelector((state)=>{

        return state.news.trending
    
        })

    useEffect(()=>{
        if(!news.length){
            dispatch(fetchNews());
          }
    },[])

 
    console.log(news)

    
    return (

        

        news ? (news.map((item)=>{

         return (
         
         <a href={item.url}>
         <Card
    hoverable
    style={{ width: "100%" }}
    cover={<img alt="example" src={item.urlToImage} />}
  >
   <p> <b> {item.title} </b> </p>
   <hr/>
         <p> {item.content}</p>
   <hr/>
         <p> Author: {item.author}</p>
  </Card>
  </a>
  )

        })
        ):null 
      
    )

}

export default News;