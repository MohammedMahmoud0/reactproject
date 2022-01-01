import React, { useContext } from 'react';
import MoviesCcontext from '../../MoviesContext';
import { useHistory } from 'react-router-dom';
export default function TV() {

    const history = useHistory();

    let { trendingTv } = useContext(MoviesCcontext);
    let imgPrefix = 'https://image.tmdb.org/t/p/w500';

    function redirectDetail(id) {
        history.push(`/movie/${id}`)
    }
    return (
        <div>
            <div className='row my-5'>

                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <div className='brdr my-3 w-25'></div>
                        <h2 className='h4'>Trending TV <br />
                            To Watch <br /> Right Now</h2>
                        <p className='text-muted'>trending TV To watch</p>

                        <div className='brdr my-3'></div>
                    </div>



                </div>
                {trendingTv ? trendingTv.map((movie, index) => <div key={index} className="col-md-2">
                    <div className="movie" onClick={() => { redirectDetail(movie.id) }}>
                        <img className='w-100' src={imgPrefix + movie.poster_path} alt={movie.title} />
                        <h3 className='h6 my-2'>{movie.name}</h3>
                    </div>
                </div>) : ''}


            </div>

        </div>
    )
}
