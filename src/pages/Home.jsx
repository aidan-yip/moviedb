import { useState } from "react";
import { useEffect } from "react";
import "./home.css";
import { getMovies } from "../utilities/api.js";
import Movies from "../components/Movies.jsx";
// import { data } from 'react-router';

// components
import SplideSlider from "../components/SplideSlider.jsx";

function Home() {
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

  const scrollToSection = () => {
    const sectionHeader = document.getElementById("section-header");
    if (sectionHeader) {
      sectionHeader.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home_container">
      <SplideSlider />
      <div className="overlay-container">
        <div className="handle" title="Click/Tap to scroll up" onClick={scrollToSection}></div>
        <Movies title="Popular Movies" movies={popularMovies} />
        <Movies title="Now Playing" movies={nowPlayingMovies} />
        <Movies title="Top Rated" movies={topRatedMovies} />
        <Movies title="Upcoming" movies={upcomingMovies} />
      </div>
    </section>
  );
}
export default Home;
