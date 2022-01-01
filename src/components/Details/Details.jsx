import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Details(props) {
    let [data, setData] = useState([]);
    // console.log(props.match.params)
    let imgPrefix = 'https://image.tmdb.org/t/p/w500';

    async function getTrendingMoviesDetail() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=0c3f67cbf4e8c47d907f78e7f1f7299c`)

        setData(data);

    }
    useEffect(() => {
        getTrendingMoviesDetail();
    })
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-4">
                    <img className='w-75' src={imgPrefix + data.poster_path} alt="" />
                    <h2><span className='text-danger'>Movie_Name:</span>{data.title}</h2>
                    <h2><span className='text-danger'>Vote:</span>{data.vote_average}</h2>
                    {(data.adult === false) ?
                        <h2><span className='text-danger'>adult:</span>for adult & children</h2> :
                        <h2><span className='text-danger'>adult:</span>for adult only</h2>}
                    <h2><span className='text-danger'>Language:</span>{data.original_language}</h2>
                </div>
            </div>

        </div>
    )
}
