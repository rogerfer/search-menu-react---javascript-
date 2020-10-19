import React from 'react';
import avengers from '../assets/movie1.jpg';
import blackWidow from '../assets/movie2.jpeg';
import frozen2 from '../assets/movie3.jpg';
import scaryMovie from '../assets/movie4.jpg';
import starWars from '../assets/movie5.jpeg';
import santana from '../assets/movie6.jpg';
import dateMovie from '../assets/movie7.jpg';
import badBoys from '../assets/movie8.jpg';

const Movie = (props) => {



    let image = "";

    switch (props.name) {
        case "Avengers":
            image = avengers;
            break;
        case "Black Widow":
            image = blackWidow;
            break;
        case "Frozen 2":
            image = frozen2;
            break;
        case "Scary Movie":
            image = scaryMovie;
            break;
        case "Star Wars":
            image = starWars;
            break;
        case "Santana":
            image = santana;
            break;
        case "Date Movie":
            image = dateMovie;
            break;
        case "Bad Boys":
            image = badBoys;
            break;
        default:
            image = ""
    }

    let cover = {
        backgroundImage: 'url(' + image + ')'
    }

    return (

        <div className="movie-container">
            <div className="movie-image" style={cover}></div>
            <p className="movie-title">{props.name}</p>
            <p className="movie-title">{props.year}</p>
        </div>





    )



}

export default Movie;