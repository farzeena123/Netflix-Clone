import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axios from 'axios'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
     useEffect(()=>{
       axios.get(props.url).then(response=>{
         console.log(response.data)
         setMovies(response.data.results)
       })
     },[])
     const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const handleMovie=(id)=>{
      console.log(id)
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array Empty')
        }
      })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj,index)=>
              <img onClick={()=>handleMovie(obj.id)} key={index} className= {props.isSmall ? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              
            )}
            
            
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost