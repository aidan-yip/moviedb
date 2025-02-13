import "./about.css";
import camera_img from "/images/moviedb_iconv2.png";

function About() {
  return (
    <div className="about-container">
      <h2 className="page-header">About</h2>
      <img src={camera_img} alt="camera" className="about-logo"/>
      <p className="about-text">
        This is a free and open website where anyone can find information about
        movies, TV shows, actors, and other entertainment. It's kind of like
        IMDb, but because it's open source, anyone can use it, change it, and
        help make it better. We have lots of details about films and TV
        programs, including who was in them, who directed them, what genre they
        are, ratings, reviews, and much more. Because it's run by the community,
        everyone is welcome to add new information, fix mistakes, and help grow
        the database. We believe that by working together, we can create a
        really complete resource for entertainment information.
      </p>
    </div>
  );
}
export default About;
