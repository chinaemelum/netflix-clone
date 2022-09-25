
import './App.scss';
import Rows from './row/rows';
import Requests from './Request'
import Banner from './Banner/Banner';
import Nav from './NavBar/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows title='NETFLIX ORIGINALS' fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title='Trending Now' fetchUrl={Requests.fetchTrending} />
      <Rows title='Top Rated' fetchUrl={Requests.fetchTopRated} />
      <Rows title='Action Movies' fetchUrl={Requests.fetchActionMovies} />
      <Rows title='Comedy Movies' fetchUrl={Requests.fetchComedyMovies} />
      <Rows title='Horror Movies' fetchUrl={Requests.fetchHorrorMovies} />
      <Rows title='Romance Movies' fetchUrl={Requests.fetchRomanceMovies} />
      <Rows title='Documentaries' fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
