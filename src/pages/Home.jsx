import { useEffect } from 'react';
import './home.css';
// import { data } from 'react-router';

function Home() {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
        .then(data => {
            setPopularMovies(data.results);
        })
        .catch (error => {
            alert('Error fetching movies', error)
        });
    });


    return (
        <div>
            <h1>Home Page</h1>
            <Movies />
        </div>
    )
}
export default Home;