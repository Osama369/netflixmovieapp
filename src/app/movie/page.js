import React from 'react'

import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'


const Movie =  async() => {

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
 const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'f006490c95msh327ae385eef6d07p19b6a7jsn7232cd4f6193',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

   const resp=  await fetch(url,options);
   const data= await resp.json();
   const main_data= data.titles;
   
           
  return (
  
  <> 
        <section className={styles.movieSection}>
           <div className={styles.container}>
           
           <div className={styles.card_section}>

          
       

         {
           
           main_data.map((curElem)=>{
             return <MovieCard key={curElem.id} {...curElem} />
            })
          } 
            </div>
           </div>
          </section>
  </>
  )
}

export default Movie
