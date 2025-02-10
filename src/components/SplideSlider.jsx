import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../utilities/api.js";
import { IMG_URL } from "../globals/globals";

// splide slider
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// css
import "@splidejs/react-splide/css/skyblue";
import "./SplideSlider.css";

function SplideSlider() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getMovies("popular")
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching movies", error);
      });

    getMovies("now_playing")
      .then((data) => {
        console.log(data);
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching movies", error);
      });

    getMovies("top_rated")
      .then((data) => {
        console.log(data);
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching movies", error);
      });
    getMovies("upcoming")
      .then((data) => {
        console.log(data);
        setUpcomingMovies(data.results);
      })
      .catch((error) => {
        alert("Error fetching movies", error);
      });
  }, []);

  return (
    <Splide
      className="splideContainer"
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        autoplay: true,
        interval: 3500, // 4 second interval
        pauseOnHover: false,
        direction: "ltr",
        wheel: true,
        releaseWheel: true,
        wheelMinThreshold: 2,
      }}
    >
      {popularMovies.length > 0 && (
        <SplideSlide className="splideSlide">
          <img
            className="home-banner"
            src={`${IMG_URL}w780/${
              popularMovies[Math.floor(Math.random() * popularMovies.length)]
                .backdrop_path
            }`}
            alt={
              popularMovies[Math.floor(Math.random() * popularMovies.length)]
                .title
            }
          />
        </SplideSlide>
      )}
      {nowPlayingMovies.length > 0 && (
        <SplideSlide className="splideSlide">
          <img
            className="home-banner"
            src={`${IMG_URL}w780/${
              nowPlayingMovies[
                Math.floor(Math.random() * nowPlayingMovies.length)
              ].backdrop_path
            }`}
            alt={
              nowPlayingMovies[
                Math.floor(Math.random() * nowPlayingMovies.length)
              ].title
            }
          />
        </SplideSlide>
      )}
      {topRatedMovies.length > 0 && (
        <SplideSlide className="splideSlide">
          <img
            className="home-banner"
            src={`${IMG_URL}w780/${
              topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]
                .backdrop_path
            }`}
            alt={
              topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]
                .title
            }
          />
        </SplideSlide>
      )}
    </Splide>
  );
}

export default SplideSlider;
