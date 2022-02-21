import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './request';

function Banner({fetchUrl,title}) {

const [movies,setMovies]=useState([]);

useEffect(()=>{
      
 async function fetchData() {
 const request=await axios.get({fetchUrl});
 console.log(request);
 return request;

}

fetchData();


},[fetchUrl])







  return (
    <div>

    <h4>{title}</h4>
    
    </div>
  )
}

export default Banner