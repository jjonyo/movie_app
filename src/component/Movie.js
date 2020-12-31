import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./Movie.css"

function Movie({id,year,title,summary,poster,genres,poster_large}){
    return (
        <Link className="movie_link" to={{
            pathname:`/movie_details/${id}`,
            state : {
                year:year,
                title:title,
                genres:genres,
                summary:summary,
                poster:poster,
                poster_large:poster_large
            }
        }}>
            <div className="movie">
                <img className="movie_img" src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h3 className="movie_year">({year})</h3>
                    <ul className="genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p class="movie_summary">{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    poster_large : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;